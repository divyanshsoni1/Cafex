import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Features | Growth Tools for Independent Cafes", // Appends cleanly to the layout template
  description:
    "Explore the powerful tools CafeX offers to scale your coffee shop. Discover our hyper-local search mapping, automated dynamic ad generators, and live menu special publisher dashboards.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    type: "website",
    title: "CafeX Features | Discovery, Reputation & Local Ad Automation",
    description:
      "Unlock advanced capability sets engineered to boost cafe foot traffic. Explore real-time rating telemetry, location-aware map optimization, and multi-channel local promotion tools.",
    url: "/features",
    images: [
      {
        url: "/images/og-features.jpg", // Kept inside your /public directory
        width: 1200,
        height: 630,
        alt: "Dashboard interface showcasing CafeX analytics, hyper-local ad tools, and menu customization screens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CafeX Features | Discovery, Reputation & Local Ad Automation",
    description:
      "Take a deep dive into our feature suite—from automatic ad creators to real-time menu publishers built for cafes.",
    images: ["/images/og-features.jpg"],
  },
};

export default function FeaturesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "CafeX Growth Suite",
      applicationCategory: "BusinessApplication",
      operatingSystem: "All",
      description:
        "An all-in-one digital visibility and automated hyper-local marketing utility platform tailored explicitly for independent coffee shops.",
      featureList: [
        "Hyper-local discovery map optimization",
        "Automated digital advertisement generator",
        "Live contextual menu specials dashboard",
        "Aggregate community star rating tracking",
      ],
    },
  };

  const coreTrafficFeatures = [
    {
      icon: "📍",
      title: "Radius-Based Discovery Engine",
      description:
        "Uses real-time geolocation mapping to drop your cafe directly onto the active feeds of users searching for food or workspace options within walking or short driving distance.",
    },
    {
      icon: "🔥",
      title: "Live 'Daily Specials' Flash Flashers",
      description:
        "Got slow mid-afternoon hours? Update your current special inside the dashboard in under 30 seconds to immediately ping users looking for a quick quick bite nearby.",
    },
    {
      icon: "⭐",
      title: "Aggregate Trust Telemetry",
      description:
        "Aggregates authentic community reviews and ratings across standard criteria (Wi-Fi speed, seating availability, ambience) to build trusted social proof instantly.",
    },
    {
      icon: "📣",
      title: "1-Click Hyper-Local Ad Generation",
      description:
        "Select an item, set a budget, and hit launch. Our internal generator instantly maps out high-conversion digital ad cards and handles regional targeted delivery seamlessly.",
    },
  ];

  const operationalUtilityFeatures = [
    {
      title: "Seamless POS & Billing Software Syncing",
      description:
        "Connects cleanly with your existing management terminals to track real-time stock levels and automatically pull down menu options if items sell out in the kitchen.",
    },
    {
      title: "Dynamic Contactless QR Menus",
      description:
        "Generates branded digital menus that users can explore from your profile page or right at the table, complete with fast filter toggles for allergen or dietary restrictions.",
    },
    {
      title: "Retention & Coffee Stamp Loyalty Cards",
      description:
        "Ditch the paper cards. Our built-in digital pass system lets recurring customers track their stamps right inside the app, dramatically scaling month-over-month customer lifetime value.",
    },
    {
      title: "High-Resolution Seating Telemetry",
      description:
        "Allows remote remote workers or student groups to check your current seating density status or plug point availability before leaving their house.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-neutral-50 text-neutral-900 selection:bg-amber-100 min-h-screen">
        {/* Editorial Hero Layout Header */}
        <header className="bg-white border-b border-neutral-200 py-20 sm:py-28 text-center relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-inset ring-amber-700/10 mb-6">
              ENGINEERED FOR GROWTH
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl max-w-3xl mx-auto leading-[1.1]">
              Every tool you need to fill{" "}
              <span className="text-amber-800">every table.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Stop guessing how to reach local coffee lovers. CafeX equips your
              business with an enterprise marketing suite designed to turn
              digital lookers into high-value regulars.
            </p>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.03),transparent)]" />
        </header>

        {/* SECTION 1: Traffic Amplification Matrix */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              1. Driving Foot Traffic & Popularity
            </h2>
            <p className="text-sm text-neutral-500 mt-2">
              Bespoke promotional tools built specifically to solve the local
              marketing discovery loop.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreTrafficFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-4 bg-amber-50 h-10 w-10 flex items-center justify-center rounded-lg border border-amber-100/50">
                    {feat.icon}
                  </div>
                  <h3 className="text-md font-bold text-neutral-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Split Row Analytical Dashboard Showcase Visual */}
        <section className="bg-white border-t border-b border-neutral-200 py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-2">
                  OPERATIONAL METRICS
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-4">
                  Track every view, route click, and conversion rate.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Our comprehensive partner dashboard removes marketing smoke
                  and mirrors. See exactly how many users viewed your specials,
                  tracked map routes to your doorstep, or saved your dynamic
                  menu items for later date visits.
                </p>
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 flex gap-4 items-center">
                  <div className="bg-amber-800 text-white font-black text-xl h-10 w-10 flex items-center justify-center rounded-xl shrink-0">
                    📈
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-800">
                      Empirical Business Telemetry
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Understand your busiest local hours and highest converting
                      menu items instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex justify-center relative">
                {/* Visual Interface Mockup Block representing a live dashboard readout panel */}
                <div className="bg-neutral-950 text-white rounded-2xl p-6 shadow-2xl w-full max-w-xl border border-neutral-800 font-mono text-xs select-none">
                  <div className="flex justify-between items-center border-b border-neutral-800 pb-3 mb-4">
                    <span className="text-neutral-400 font-sans font-bold">
                      📊 CafeX Partner Portal v2.6
                    </span>
                    <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                      Online
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6 font-sans">
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                        Profile Views
                      </p>
                      <p className="text-xl font-black text-white mt-1">
                        14,205
                      </p>
                      <p className="text-[10px] text-green-400 mt-0.5 font-medium">
                        ↑ 24% this month
                      </p>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                        Route Clicks
                      </p>
                      <p className="text-xl font-black text-white mt-1">
                        2,841
                      </p>
                      <p className="text-[10px] text-green-400 mt-0.5 font-medium">
                        ↑ 18% this month
                      </p>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                        Ad Conversions
                      </p>
                      <p className="text-xl font-black text-amber-400 mt-1">
                        894
                      </p>
                      <p className="text-[10px] text-neutral-400 mt-0.5 font-normal">
                        ROI: 4.6x metric
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-[11px] border-t border-neutral-900 pt-3">
                    // Active Live Feed Logs:
                  </p>
                  <p className="text-amber-400/90 mt-1.5 font-light">
                    → User clicked 'Hazelnut Macchiato Combo' ad (0.3km away)
                  </p>
                  <p className="text-neutral-400 mt-1 font-light">
                    → Route mapped to location from Indore Central District
                  </p>
                  <p className="text-neutral-400 mt-1 font-light">
                    → POS system synced successfully: Stock state refreshed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Deep Operational Business Utility Features Grid */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              2. Core Infrastructure & Business Health
            </h2>
            <p className="text-md text-neutral-500 mt-3">
              Deep operational modules designed to automate daily adjustments
              and scale absolute guest lifetime value.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {operationalUtilityFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm hover:border-amber-800/20 transition-all flex gap-4"
              >
                <span className="text-amber-800 font-bold shrink-0 text-md">
                  ⚡
                </span>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Conversion CTA Section */}
        <section className="bg-neutral-900 text-white py-16 text-center px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to see it in real action?
            </h2>
            <p className="text-xs text-neutral-400 mt-3 leading-relaxed max-w-md mx-auto">
              Setting up takes less than 10 minutes. Claim your portal block,
              drop in your baseline values, and let our growth engines manage
              the heavy lifting.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-amber-800 px-5 py-2.5 text-xs font-semibold hover:bg-amber-900 transition-colors"
              >
                Claim Your Listing Portal
              </a>
              <a
                href="/pricing"
                className="rounded-xl bg-neutral-800 border border-neutral-700 px-5 py-2.5 text-xs font-semibold hover:bg-neutral-700 transition-colors text-neutral-300"
              >
                Compare Plan Inclusions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
