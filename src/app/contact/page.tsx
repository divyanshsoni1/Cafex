import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Partner with CafeX & Get Listed",
  description:
    "Get in touch with the CafeX team. Submit partnership inquiries, register your cafe, explore custom local advertising plans, or reach out to our regional offices for support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: "Connect with CafeX | Cafe Partnerships & Business Inquiries",
    description:
      "Have questions about getting listed, accelerating your community ratings, or launching hyper-local ads? Contact the CafeX support and business onboarding team today.",
    url: "/contact",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "CafeX support desk and business partnership onboarding center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with CafeX | Cafe Partnerships & Business Inquiries",
    description:
      "Get in touch to list your coffee house, scale your local ratings, or run targeted local advertisement campaigns.",
    images: ["/images/og-contact.jpg"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "CafeX",
      url: "https://cafex.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support & partnerships",
        email: "partners@cafex.com",
        availableLanguage: ["English", "Hindi"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-neutral-50 text-neutral-900 selection:bg-amber-100 min-h-screen py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-inset ring-amber-700/10 mb-4">
              PARTNERSHIP PORTAL
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl leading-tight">
              Let’s put your cafe on the{" "}
              <span className="text-amber-800">map</span>
            </h1>
            <p className="text-md text-neutral-500 mt-3 max-w-xl mx-auto">
              Have questions about listing your coffee house, scaling your local
              ratings, or deploying automated ads? Drop us a message.
            </p>
          </div>

          {/* Core Two-Column Interface Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden max-w-5xl mx-auto">
            {/* Left Sidebar Content Panel */}
            <div className="lg:col-span-5 bg-neutral-900 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold tracking-tight mb-4 text-amber-400">
                  Why partner with CafeX?
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                  We bridge the gap between independent cafe owners and hundreds
                  of daily coffee explorers looking for their next aesthetic
                  workspaces or artisanal brews.
                </p>

                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-lg leading-none bg-neutral-800 h-8 w-8 rounded-lg flex items-center justify-center border border-neutral-700">
                      🚀
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Immediate Discovery Boost
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                        Showcase live daily menu specials to nearby users.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg leading-none bg-neutral-800 h-8 w-8 rounded-lg flex items-center justify-center border border-neutral-700">
                      ⭐
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Reputation Growth
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                        Collect, trace, and highlight localized aggregate
                        reviews.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg leading-none bg-neutral-800 h-8 w-8 rounded-lg flex items-center justify-center border border-neutral-700">
                      📊
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold">
                        Automated Local Ads
                      </h4>
                      <p className="text-xs text-neutral-400 mt-0.5 leading-normal">
                        Run zero-effort campaigns targeting local foot traffic.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Support context links at bottom */}
              <div className="mt-12 lg:mt-0 pt-6 border-t border-neutral-800 relative z-10">
                <p className="text-xs text-neutral-400">Direct Inquiries</p>
                <p className="text-sm font-semibold text-neutral-200 mt-0.5">
                  partners@cafex.com
                </p>
              </div>

              {/* Accent design blob overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(146,64,14,0.15),transparent)] pointer-events-none" />
            </div>

            {/* Right Form Component Panel */}
            {/* NOTE: Add "use client" behavior here or swap to a separate form child layer when adding Server Actions */}
            <form className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-600"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Divyansh Soni"
                    className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phoneNumber"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-600"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wider text-neutral-600"
                >
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* City */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="city"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-600"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    placeholder="e.g. Indore"
                    className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all"
                  />
                </div>

                {/* State */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="state"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-600"
                  >
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    placeholder="e.g. Madhya Pradesh"
                    className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all"
                  />
                </div>
              </div>

              {/* Cafe Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cafeName"
                  className="text-xs font-semibold uppercase tracking-wider text-neutral-600"
                >
                  Cafe / Business Name (Optional)
                </label>
                <input
                  type="text"
                  id="cafeName"
                  placeholder="e.g. The Velvet Brew Lab"
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all"
                />
              </div>

              {/* Toggle Switch Setup: Using Management Software */}
              <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                <div>
                  <label
                    htmlFor="usingSoftware"
                    className="text-sm font-semibold block text-neutral-800"
                  >
                    Are you currently using billing/POS software?
                  </label>
                  <p className="text-xs text-neutral-400">
                    Helps our team optimize integration compatibility presets.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="usingSoftware"
                  className="h-4 w-4 rounded border-neutral-300 text-amber-800 focus:ring-amber-800/20 cursor-pointer accent-amber-800"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-neutral-600"
                >
                  Additional Message / Special Request
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us a little about your roasting style, seating capacity, or promotion goals..."
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full rounded-xl bg-amber-800 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-900 focus:outline-none transition-colors mt-2"
              >
                Submit Partnership Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
