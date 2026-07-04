import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | Empowering & Promoting Local Cafes",
  description:
    "Discover how we help local coffee spots thrive. Learn how our platform increases cafe popularity, optimizes community ratings, and builds high-conversion advertising campaigns to connect cafes with local coffee lovers.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile", // Set to profile style for 'About' context representation
    title: "How We Promote & Grow Local Cafes | About CafeFinder",
    description:
      "We build tools to scale cafe popularity. Explore our promotional ecosystems, review acceleration systems, and custom advertisement structures built exclusively for local coffee shops.",
    url: "/about",
    images: [
      {
        url: "/images/og-about-creators.jpg", // Kept inside your /public directory
        width: 1200,
        height: 630,
        alt: "A vibrant workspace showcasing creative marketing assets and marketing campaigns tailored for local cafes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Promote & Grow Local Cafes | About CafeFinder",
    description:
      "Learn how we build specialized advertising frameworks to increase cafe ratings and overall community foot traffic.",
    images: ["/images/og-about-creators.jpg"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "CafeX",
      url: "https://cafex.com",
      description:
        "A discovery and growth engine designed to scale the digital footprint, review structures, and automated advertising campaigns of local cafes.",
    },
  };

  const stats = [
    { value: "500+", label: "Partner Cafes" },
    { value: "45%", label: "Average Foot-Traffic Boost" },
    { value: "120K+", label: "Active Coffee Lovers" },
    { value: "4.8★", label: "Average Platform Rating" },
  ];

  const pillars = [
    {
      icon: "🔍",
      title: "Hyper-Local Discovery",
      description:
        "We put hidden gems and legendary roasting spots right on the radar of coffee enthusiasts nearby, complete with dynamic distance mapping.",
    },
    {
      icon: "⭐",
      title: "Reputation Acceleration",
      description:
        "Through authentic review aggregation and feedback loops, we help businesses build undeniable social proof that elevates their rankings.",
    },
    {
      icon: "📣",
      title: "Smart Ad Generation",
      description:
        "Our proprietary engine instantly creates contextually relevant localized ads, pushing live menu specials directly to active feeds.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-neutral-50 text-neutral-900 selection:bg-amber-100 min-h-screen">
        {/* Editorial Hero Section */}
        <section className="relative bg-white border-b border-neutral-200 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-inset ring-amber-700/10 mb-6">
                  THE CAFEX PROPULSION SYSTEM
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl leading-[1.08] mb-6">
                  We amplify the voice of{" "}
                  <span className="text-amber-800">local roasters.</span>
                </h1>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Boutique cafes face an uphill battle against massive retail
                  chains. CafeX was built to level the playing field. We turn
                  neighborhood coffee houses into famous local landmarks by
                  driving discovery, optimizing community authority, and
                  handling targeted ad generation.
                </p>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-xl border border-neutral-200">
                  <img
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
                    alt="Barista brewing specialty coffee at a modern local counter"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Visual design embellishment overlay */}
                <div className="absolute -bottom-6 -left-6 bg-amber-800 text-white p-6 rounded-2xl shadow-lg hidden sm:block max-w-[220px]">
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-xs text-amber-200 mt-1 font-medium">
                    Focused on independent coffee ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Matrix / Stats Grid */}
        <section className="bg-neutral-900 text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-amber-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Growth Framework / Core Pillars */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              How we scale cafe popularity
            </h2>
            <p className="text-md text-neutral-500 mt-3">
              We combine community crowdsourcing with advanced visibility tools
              to create a sustainable roadmap for local business expansion.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-amber-800/20 transition-all duration-300 flex flex-col"
              >
                <div className="text-3xl mb-4 bg-neutral-50 h-12 w-12 flex items-center justify-center rounded-xl border border-neutral-100">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Advertising Mockup / Value Proposition Showcase */}
        <section className="bg-white border-t border-b border-neutral-200 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-950/40 rounded-[2.5rem] border border-neutral-200 p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-neutral-900 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                    Automated local ads that hit the target.
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                    Our partner portal allows cafes to upload a menu special in
                    under a minute. CafeX transforms it into highly responsive
                    digital advertisements targeted directly to users within
                    walking distance, turning spare kitchen capacity into peak
                    profit hours.
                  </p>
                  <ul className="space-y-3 text-sm font-medium text-neutral-200">
                    <li className="flex items-center gap-2">
                      🟢 Real-time geolocation ad display
                    </li>
                    <li className="flex items-center gap-2">
                      🟢 Zero technical marketing expertise needed
                    </li>
                    <li className="flex items-center gap-2">
                      🟢 Direct review injection inside conversion pages
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  {/* Visual interactive UI Card placeholder resembling generated ad layouts */}
                  <div className="bg-white rounded-2xl p-4 shadow-2xl text-neutral-900 max-w-sm w-full border border-neutral-100">
                    <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80"
                        alt="Specialty pour over ad element"
                        className="object-cover w-full h-full"
                      />
                      <span className="absolute top-2 right-2 bg-amber-800 text-white text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md">
                        🔥 Live Ad
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-sm">Brew-Tech Lab</h4>
                        <p className="text-[11px] text-neutral-400">
                          0.4 km away • 4.9★
                        </p>
                      </div>
                      <span className="text-xs font-black bg-amber-50 text-amber-950 px-2 py-1 rounded-md border border-amber-100">
                        Save 20%
                      </span>
                    </div>
                    <p className="text-xs font-medium text-neutral-700 mt-2 line-clamp-1">
                      Nitro Cold Brew + Blueberry Muffin Promo
                    </p>
                    <button className="w-full mt-3 bg-neutral-900 text-white text-xs font-bold py-2 rounded-xl hover:bg-neutral-800 transition-colors">
                      Claim Offer Path
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(146,64,14,0.15),transparent)] pointer-events-none" />
            </div>
          </div>
        </section>

        {/* CTA Braid Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Own a coffee house? Let's team up.
          </h2>
          <p className="mt-4 text-md text-neutral-500 max-w-xl mx-auto">
            Join the digital collective redefining neighborhood specialty dining
            infrastructure across the region.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-xl bg-amber-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-900 transition-all">
              Claim Your Cafe Portal
            </button>
            <button className="rounded-xl bg-white border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-all">
              Schedule A Demo
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
