import type { Metadata } from "next";
import CafeGridClientWrapper from "../components/CafeGridClientWrapper"; // We define this below or use inline composition safely

export const metadata: Metadata = {
  title:
    "Cafex | Top Cafes Near You | Discover Local Menus, Ratings & Live Specials",
  description:
    "Find the best cafes in your neighborhood. Browse updated menus, view community ratings, check out daily specials, and pinpoint nearby coffee shops.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Find Top Cafes Near You | Ratings, Menus & Specials",
    description:
      "Explore local coffee spots, track community ratings, view active menus, and discover today's best cafe food and drink specials.",
    url: "/",
    siteName: "CafeFinder",
    images: [
      {
        url: "/images/og-default-cafes.jpg",
        width: 1200,
        height: 630,
        alt: "Map interface displaying top-rated neighborhood cafes and delicious espresso shots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Top Cafes Near You | Ratings, Menus & Specials",
    description:
      "Explore local coffee spots, track community ratings, and view active menus.",
    images: ["/images/og-default-cafes.jpg"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CafeX",
    url: "https://cafex-ten.vercel.app/",
    description:
      "A comprehensive directory to locate neighborhood cafes, evaluate food/drink menus, and view live active specials.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cafex-ten.vercel.app",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-amber-100">
        {/* Hero Banner Section */}
        <header className="relative overflow-hidden bg-white border-b border-neutral-200 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800 ring-1 ring-inset ring-amber-600/20 mb-4">
              ✨ Discover Local Flavors
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl max-w-3xl mx-auto leading-[1.1]">
              Find Your Next Perfect{" "}
              <span className="text-amber-800">Coffee Spot</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore highly-rated neighborhoods hubs, view live updated menus,
              and lock down exclusive daily specials.
            </p>

            {/* Visual Search Bar Component */}
            <div className="mt-8 mx-auto max-w-xl shadow-md rounded-2xl bg-white p-2 border border-neutral-200 flex items-center gap-2 focus-within:ring-2 focus-within:ring-amber-700/20 transition-all">
              <div className="pl-3 text-neutral-400">🔍</div>
              <input
                type="text"
                placeholder="Search by city, cafe name or item..."
                className="w-full bg-transparent text-sm focus:outline-none text-neutral-800 placeholder:text-neutral-400"
              />
              <button className="rounded-xl bg-amber-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-900 transition-colors shrink-0">
                Search
              </button>
            </div>
          </div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skews-x-12 bg-neutral-50/50 min-[1150px]:left-1/2 min-[1150px]:ml-0 min-[1150px]:w-full" />
        </header>

        {/* Primary Content Feed Layer */}
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Featured Neighborhood Cafes
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Curated real-time list of outstanding coffee spots near your
                territory.
              </p>
            </div>
            <div className="flex gap-2">
              <select className="rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 shadow-sm focus:outline-none">
                <option>Nearest Distance</option>
                <option>Highest Rating</option>
              </select>
            </div>
          </div>

          {/* Client Interactive Matrix Container handles stateful mapping directly */}
          <CafeGridClientWrapper />
        </main>
      </div>
    </>
  );
}
