import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafex | Top Cafes Near You | Discover Local Menus, Ratings & Live Specials",
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

interface Cafe {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  totalReviews: number;
  distanceKm: number;
  city: string;
  state: string;
  currentSpecial: {
    name: string;
    price: string;
    description: string;
  } | null;
  tags: string[];
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CafeFinder",
    url: "https://yourcafefinder.com",
    description:
      "A comprehensive directory to locate neighborhood cafes, evaluate food/drink menus, and view live active specials.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourcafefinder.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const mockCafes: Cafe[] = [
    {
      id: "1",
      name: "The Bean Nook",
      imageUrl:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      totalReviews: 142,
      distanceKm: 0.8,
      city: "Indore",
      state: "Madhya Pradesh",
      tags: ["Specialty Coffee", "Co-working", "Vegan Options"],
      currentSpecial: {
        name: "Hazelnut Macchiato & Croissant Combo",
        price: "₹249",
        description:
          "Freshly pulled espresso shot layered with house-made hazelnut syrup and steamed milk, served with a butter croissant.",
      },
    },
    {
      id: "2",
      name: "Roast & Relish",
      imageUrl:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      totalReviews: 98,
      distanceKm: 1.4,
      city: "Indore",
      state: "Madhya Pradesh",
      tags: ["Artisanal Breads", "Outdoor Seating"],
      currentSpecial: {
        name: "Smoked Avocado Sourdough Toast",
        price: "₹189",
        description:
          "Toasted sourdough loaded with mashed Haas avocados, cherry tomatoes, and microgreens, drizzled with olive oil.",
      },
    },
    {
      id: "3",
      name: "The Velvet Brew",
      imageUrl:
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80",
      rating: 4.3,
      totalReviews: 215,
      distanceKm: 2.1,
      city: "Indore",
      state: "Madhya Pradesh",
      tags: ["Dessert Lounge", "Quiet Space"],
      currentSpecial: null, 
    },
  ];

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
          {/* Subtle geometric background accents */}
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

          {/* Dynamic Feed Layout Matrix Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mockCafes.map((cafe) => (
              <article
                key={cafe.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image Section Wrapper */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100 relative">
                  <img
                    src={cafe.imageUrl}
                    alt={cafe.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-semibold text-neutral-800 border border-neutral-100 flex items-center gap-1">
                    📍 {cafe.distanceKm} km away
                  </div>
                </div>

                {/* Content Details Block */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-amber-800 transition-colors">
                        {cafe.name}
                      </h3>
                      <p className="text-xs text-neutral-400 font-medium">
                        {cafe.city}, {cafe.state}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-xs font-bold text-amber-900 border border-amber-100/50">
                      ★ {cafe.rating.toFixed(1)}
                      <span className="text-neutral-400 font-normal">
                        ({cafe.totalReviews})
                      </span>
                    </div>
                  </div>

                  {/* Horizontal pill tag collections */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {cafe.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-neutral-100 rounded-md px-2 py-0.5 text-[11px] font-medium text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contextual Conditional Special Content Layer */}
                  <div className="mt-auto pt-4 border-t border-neutral-100">
                    {cafe.currentSpecial ?
                      <div className="rounded-xl bg-amber-50/70 border border-amber-600/10 p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                            Today's Special
                          </span>
                          <span className="text-xs font-extrabold text-neutral-900 bg-white shadow-sm border px-1.5 py-0.5 rounded-md">
                            {cafe.currentSpecial.price}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-neutral-800 line-clamp-1">
                          {cafe.currentSpecial.name}
                        </p>
                        <p className="text-xs text-neutral-500 line-clamp-2 mt-0.5 font-normal leading-normal">
                          {cafe.currentSpecial.description}
                        </p>
                      </div>
                    : <div className="text-center py-2 text-xs font-medium text-neutral-400 bg-neutral-50 rounded-xl border border-dashed border-neutral-200">
                        No specials active today • View standard menu
                      </div>
                    }
                  </div>

                  <button className="mt-4 w-full rounded-xl bg-neutral-50 border border-neutral-200 py-2 text-center text-sm font-semibold text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all">
                    View Full Menu
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
