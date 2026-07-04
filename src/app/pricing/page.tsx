import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexible Subscription Plans & Ad Packages", // Appends cleanly to the layout template
  description:
    "Explore transparent pricing plans for CafeX. Choose from flexible billing cycles to list your cafe, manage aggregate ratings, and launch automated hyper-local advertising campaigns.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    type: "website",
    title: "CafeX Partner Pricing | Growth Plans for Coffee Spots",
    description:
      "Scale your coffee shop's digital reach with simple subscription models. Compare billing cycles, unlocked features, and target ad generation packages engineered for local footprints.",
    url: "/pricing",
    images: [
      {
        url: "/images/og-pricing.jpg", // Kept inside your /public directory
        width: 1200,
        height: 630,
        alt: "CafeX flexible pricing models and premium growth analytics dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CafeX Partner Pricing | Growth Plans for Coffee Spots",
    description:
      "Find a premium growth plan that works for your cafe—unlock direct marketing controls and local ad automation.",
    images: ["/images/og-pricing.jpg"],
  },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PricingPage",
    mainEntity: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "1499",
      highPrice: "4999",
      offerCount: "3",
    },
  };

  // Structured configurations ready to bind to database column schemas later
  const plans = [
    {
      name: "Starter Brew",
      description:
        "Perfect for independent neighborhood stalls getting their digital footprint established.",
      monthlyPrice: 1499,
      yearlyPrice: 999,
      isPopular: false,
      hasFirstPurchaseDiscount: false,
      discountPct: 0,
      features: [
        "Basic Directory Listing",
        "Community Star Ratings Tracking",
        "Standard Photo Gallery",
        "Distance Search Visibility",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Roaster Pro",
      description:
        "Engineered for active artisanal lounges seeking steady local traffic growth.",
      monthlyPrice: 2999,
      yearlyPrice: 1999,
      isPopular: true,
      hasFirstPurchaseDiscount: true,
      discountPct: 50, // Triggers "50% First Purchase Discount" tags from schema setup
      features: [
        "Everything in Starter Brew",
        "Live Menu Special Postings",
        "Verified Owner Badge",
        "Analytics Dashboard (Clicks & Route Views)",
        "Priority Search Placement",
      ],
      cta: "Unlock Pro Growth",
    },
    {
      name: "CafeX Enterprise",
      description:
        "Designed for premium multi-location chains looking for fully automated local campaign power.",
      monthlyPrice: 5999,
      yearlyPrice: 4499,
      isPopular: false,
      hasFirstPurchaseDiscount: false,
      discountPct: 0,
      features: [
        "Everything in Roaster Pro",
        "Automated Hyper-Local Ad Generation",
        "POS/Billing Software Integration",
        "Multi-Location Account Controller",
        "Dedicated Support Executive",
      ],
      cta: "Contact Enterprise",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-neutral-50 text-neutral-900 selection:bg-amber-100 min-h-screen py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header Text Layout */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-inset ring-amber-700/10 mb-4">
              SIMPLE PLANS
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
              Predictable costs, built for{" "}
              <span className="text-amber-800">growth.</span>
            </h1>
            <p className="text-md text-neutral-500 mt-4 max-w-xl mx-auto">
              Pick the perfect plan to get discovered by local coffee
              enthusiasts. Switch cycles or cancel configurations anytime.
            </p>

            {/* Billing Cycle Visual Selector Interface */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="text-sm font-semibold text-neutral-900">
                Monthly Billing
              </span>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-amber-800 transition-colors duration-200 ease-in-out focus:outline-none"
              >
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
              </button>
              <span className="text-sm font-semibold text-neutral-500 flex items-center gap-1.5">
                Yearly Saving
                <span className="inline-block bg-green-100 text-green-800 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase">
                  Save ~33%
                </span>
              </span>
            </div>
          </div>

          {/* Core Product Cards Columns Grid Matrix */}
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-start mt-16">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl bg-white border p-8 shadow-sm flex flex-col transition-all duration-300 ${
                  plan.isPopular ?
                    "border-amber-800 ring-2 ring-amber-800/10 scale-100 lg:scale-[1.03] lg:-translate-y-1 shadow-md z-10"
                  : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                {/* Popularity Badge Overlay */}
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-800 text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                    ⭐ Most Popular Tier
                  </span>
                )}

                {/* Plan Naming Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-2 font-normal leading-relaxed min-h-[32px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display Rendering Box */}
                <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 mb-6 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-neutral-900">
                    ₹{plan.yearlyPrice}
                  </span>
                  <span className="text-sm font-medium text-neutral-400">
                    / month
                  </span>
                  <span className="text-[10px] font-bold text-neutral-400 ml-auto block border-l pl-3 border-neutral-200 uppercase tracking-wider">
                    Billed Yearly
                  </span>
                </div>

                {/* First Purchase Discount Segment Trigger */}
                {plan.hasFirstPurchaseDiscount && (
                  <div className="bg-amber-50 rounded-xl border border-amber-600/10 p-3 mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-amber-900">
                        New Onboarding Discount
                      </p>
                      <p className="text-[11px] text-amber-700/80 mt-0.5">
                        Applied automatically on initial checkout setup.
                      </p>
                    </div>
                    <span className="bg-amber-800 text-white font-black text-xs px-2 py-1 rounded-lg">
                      -{plan.discountPct}%
                    </span>
                  </div>
                )}

                {/* Action CTA Button Control */}
                <button
                  className={`w-full py-3 text-center text-sm font-bold rounded-xl shadow-sm transition-all mb-8 ${
                    plan.isPopular ?
                      "bg-amber-800 text-white hover:bg-amber-900"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Feature Inclusions Checklist */}
                <div className="pt-6 border-t border-neutral-100">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                    What's Unlocked
                  </p>
                  <ul className="space-y-3.5 text-sm font-medium text-neutral-700">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 leading-tight"
                      >
                        <span className="text-amber-700 font-bold shrink-0 text-xs mt-0.5">
                          ✓
                        </span>
                        <span className="font-normal text-neutral-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Small Print Clarification Footer Info */}
          <div className="text-center mt-16 max-w-md mx-auto">
            <p className="text-xs text-neutral-400 leading-relaxed">
              All listed options are denominated in INR currency formats.
              Subscription services scale seamlessly with your local operation
              timelines. Need a completely tailored enterprise arrangement?{" "}
              <a
                href="/contact"
                className="underline font-bold text-amber-800 hover:text-amber-900"
              >
                Talk to our setup team
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
