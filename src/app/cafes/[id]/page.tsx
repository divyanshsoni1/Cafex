import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import {
  ArrowLeft,
  Coffee,
  MapPin,
  Navigation,
  Share2,
  Star,
  Tag,
} from "lucide-react";

import { db } from "@/db";
import { cafes } from "@/db/schema";

type CafePageProps = {
  params: Promise<{
    id: string;
  }>;
};

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

async function getCafeById(id: string) {
  const result = await db
    .select()
    .from(cafes)
    .where(eq(cafes.id, id))
    .limit(1);

  return result[0] ?? null;
}

export async function generateMetadata({
  params,
}: CafePageProps): Promise<Metadata> {
  const { id } = await params;

  if (!UUID_REGEX.test(id)) {
    return {
      title: "Cafe Not Found | CafeX",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const cafe = await getCafeById(id);

  if (!cafe) {
    return {
      title: "Cafe Not Found | CafeX",
      description: "The requested cafe could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const rating = Number(cafe.rating).toFixed(1);

  return {
    title: `${cafe.name} in ${cafe.city} | CafeX`,
    description: `Discover ${cafe.name} in ${cafe.city}, ${cafe.state}. View ratings, reviews, cafe specialties, tags, location and current offers.`,
    keywords: [
      cafe.name,
      `cafes in ${cafe.city}`,
      `best cafes in ${cafe.city}`,
      cafe.city,
      cafe.state,
      ...(cafe.tags ?? []),
    ],
    alternates: {
      canonical: `/cafes/${cafe.id}`,
    },
    openGraph: {
      title: `${cafe.name} | CafeX`,
      description: `Explore ${cafe.name} in ${cafe.city}, ${cafe.state}.`,
      type: "website",
      images: [
        {
          url: cafe.imageUrl,
          alt: `${cafe.name} cafe`,
        },
      ],
    },
  };
}

export default async function CafeDetailsPage({
  params,
}: CafePageProps) {
  const { id } = await params;

  if (!UUID_REGEX.test(id)) {
    notFound();
  }

  const cafe = await getCafeById(id);

  if (!cafe) {
    notFound();
  }

  const rating = Number(cafe.rating);
  const distance = Number(cafe.distanceKm);
  const tags = Array.isArray(cafe.tags) ? cafe.tags : [];

  const locationQuery = encodeURIComponent(
    `${cafe.name}, ${cafe.city}, ${cafe.state}`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: cafe.name,
    image: cafe.imageUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: cafe.city,
      addressRegion: cafe.state,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toFixed(1),
      reviewCount: cafe.totalReviews,
      bestRating: "5",
      worstRating: "1",
    },
    url: `${process.env.NEXTAUTH_URL ?? ""}/cafes/${cafe.id}`,
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-[#fafafa]">
        {/* Top Navigation */}
        <div className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Cafes
              </Link>

              <div className="hidden items-center gap-2 text-sm text-neutral-500 sm:flex">
                <Link
                  href="/"
                  className="transition-colors hover:text-neutral-900"
                >
                  Home
                </Link>

                <span>/</span>

                <Link
                  href="/"
                  className="transition-colors hover:text-neutral-900"
                >
                  Cafes
                </Link>

                <span>/</span>

                <span className="max-w-48 truncate text-neutral-900">
                  {cafe.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            {/* Main Content */}
            <section className="min-w-0">
              {/* Hero Image */}
              <div className="relative overflow-hidden rounded-3xl bg-neutral-200 shadow-sm">
                <div className="aspect-[16/10] sm:aspect-[16/8]">
                  <img
                    src={cafe.imageUrl}
                    alt={`${cafe.name} in ${cafe.city}, ${cafe.state}`}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 sm:p-8">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-white/80">
                        Featured Cafe
                      </p>

                      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        {cafe.name}
                      </h1>
                    </div>

                    <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg">
                      <Star className="h-5 w-5 fill-amber-500 text-amber-500" />

                      <div>
                        <p className="text-lg font-bold leading-none text-neutral-950">
                          {rating.toFixed(1)}
                        </p>

                        <p className="mt-1 text-xs text-neutral-500">
                          {cafe.totalReviews.toLocaleString()} reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Button */}
                <button
                  type="button"
                  aria-label={`Share ${cafe.name}`}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-neutral-700 shadow-md transition hover:bg-white"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>

              {/* Location & Quick Information */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        Location
                      </p>

                      <p className="mt-1 font-semibold text-neutral-900">
                        {cafe.city}
                      </p>

                      <p className="text-sm text-neutral-500">
                        {cafe.state}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                      <Navigation className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        Distance
                      </p>

                      <p className="mt-1 font-semibold text-neutral-900">
                        {distance.toFixed(2)} km
                      </p>

                      <p className="text-sm text-neutral-500">
                        From your current location
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cafe Details */}
              <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                    <Coffee className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-neutral-950">
                      About {cafe.name}
                    </h2>

                    <p className="mt-1 text-sm text-neutral-500">
                      Everything you need to know about this cafe
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-neutral-600">
                  {cafe.name} is located in {cafe.city}, {cafe.state}. Explore
                  this cafe's ratings, customer reviews, specialties and
                  location details on CafeX.
                </p>

                {tags.length > 0 && (
                  <div className="mt-7">
                    <div className="mb-3 flex items-center gap-2">
                      <Tag className="h-4 w-4 text-amber-800" />

                      <h3 className="text-sm font-semibold text-neutral-900">
                        Cafe Highlights
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Current Special */}
              {cafe.currentSpecial && (
                <div className="mt-8 overflow-hidden rounded-3xl border border-amber-200 bg-white">
                  <div className="border-b border-amber-100 bg-amber-50/70 px-6 py-4 sm:px-8">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-800">
                      Current Special
                    </p>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                      <div>
                        <h2 className="text-2xl font-bold text-neutral-950">
                          {cafe.currentSpecial.name}
                        </h2>

                        {cafe.currentSpecial.description && (
                          <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
                            {cafe.currentSpecial.description}
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 rounded-2xl bg-neutral-950 px-5 py-3 text-center">
                        <p className="text-xs text-neutral-400">Special Price</p>

                        <p className="mt-1 text-xl font-bold text-white">
                          {cafe.currentSpecial.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <div className="p-6 sm:p-7">
                  <h2 className="text-xl font-bold text-neutral-950">
                    Cafe Overview
                  </h2>

                  <div className="mt-6 divide-y divide-neutral-100">
                    <div className="flex items-center justify-between py-4 first:pt-0">
                      <span className="text-sm text-neutral-500">
                        Rating
                      </span>

                      <span className="flex items-center gap-1.5 font-semibold text-neutral-900">
                        <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                        {rating.toFixed(1)} / 5
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-4">
                      <span className="text-sm text-neutral-500">
                        Reviews
                      </span>

                      <span className="font-semibold text-neutral-900">
                        {cafe.totalReviews.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-4">
                      <span className="text-sm text-neutral-500">
                        Distance
                      </span>

                      <span className="font-semibold text-neutral-900">
                        {distance.toFixed(2)} km
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-4 last:pb-0">
                      <span className="text-sm text-neutral-500">
                        City
                      </span>

                      <span className="max-w-40 truncate text-right font-semibold text-neutral-900">
                        {cafe.city}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-100 bg-neutral-50 p-6 sm:p-7">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${locationQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>

                  <p className="mt-3 text-center text-xs text-neutral-500">
                    Open location in Google Maps
                  </p>
                </div>
              </div>

              {/* Discover More */}
              <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                    <Coffee className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-950">
                      Looking for more cafes?
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-neutral-500">
                      Discover more cafes and find your next favorite spot.
                    </p>

                    <Link
                      href="/"
                      className="mt-4 inline-flex items-center text-sm font-semibold text-amber-800 transition hover:text-amber-900"
                    >
                      Explore Cafes
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}