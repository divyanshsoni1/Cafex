import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Platform Features", href: "/features" },
    { name: "Subscription Pricing", href: "/pricing" },
    { name: "Ad Campaign Builder", href: "/features" },
    { name: "POS Integrations", href: "/features" },
  ];

  const companyLinks = [
    { name: "About CafeX", href: "/about" },
    { name: "Onboarding Contact", href: "/contact" },
    { name: "Success Case Studies", href: "/about" },
    { name: "Partner Support", href: "/contact" },
  ];

  const regionalHubs = [
    { name: "Indore, MP", href: "/features" },
    { name: "Ujjain, MP", href: "/features" },
    { name: "Chhatrapati Sambhajinagar, MH", href: "/features" },
    { name: "Bhopal regional expansion", href: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 font-sans selection:bg-amber-100">
      {/* Primary Informational Content Matrix Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand Pitch & Newsletter */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="h-7 w-7 rounded-lg bg-amber-800 flex items-center justify-center text-white text-sm font-bold tracking-tight shadow-sm group-hover:bg-amber-900 transition-colors">
                ☕
              </span>
              <span className="text-lg font-bold tracking-tight text-neutral-900">
                Cafe<span className="text-amber-800">X</span>
              </span>
            </Link>
            <p className="text-xs text-neutral-500 leading-relaxed font-normal max-w-sm">
              CafeX is a modern hyper-local discovery engine and automated
              marketing utility built to amplify the foot traffic, community
              star ratings, and digital presence of independent artisanal coffee
              houses.
            </p>
            {/* Quick newsletter inline mockup */}
            <div className="mt-2 max-w-sm border border-neutral-200 bg-neutral-50 rounded-xl p-1 flex items-center focus-within:ring-2 focus-within:ring-amber-800/10 focus-within:bg-white transition-all">
              <input
                type="email"
                placeholder="Get partner growth tips..."
                className="w-full bg-transparent text-xs px-2 focus:outline-none text-neutral-800"
              />
              <button className="rounded-lg bg-neutral-900 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-neutral-800 transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Column 2: Product Links Map */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-widest">
              Growth Engine
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-800 transition-colors font-normal text-neutral-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company / Operations */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-widest">
              Collective
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-800 transition-colors font-normal text-neutral-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Regional Geographic Hub Map */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-widest">
              Active Regional Hubs
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
              {regionalHubs.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-800 transition-colors font-normal text-neutral-500 flex items-center gap-1"
                  >
                    <span className="text-amber-800/60">📍</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing Sub-Footer Copyright Ribbon */}
        <div className="mt-12 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-400 font-normal">
            &copy; {currentYear} CafeX Technologies Private Limited. All
            platform operations are secure, optimized for local business growth
            models.
          </p>
          <div className="flex gap-4 text-[11px] text-neutral-400 font-medium">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Cooperation
            </a>
            <a href="/sitemap.xml" className="hover:underline">
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
