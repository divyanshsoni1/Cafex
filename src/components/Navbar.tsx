"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { LogOut, PlusCircle, User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-lg bg-amber-800 flex items-center justify-center text-white font-bold tracking-tight shadow-sm group-hover:bg-amber-900 transition-colors">
              ☕
            </span>
            <span className="text-xl font-bold tracking-tight text-neutral-900">
              Cafe<span className="text-amber-800">X</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex ml-20 items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-50 text-amber-900 font-semibold"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center mb-5 ml-40">
            {status === "loading" ? (
              <div className="h-10 w-24 animate-pulse rounded-xl bg-neutral-100" />
            ) : !session?.user ? (
              <div className="pt-4 mt-2 border-neutral-100 px-3">
                <button
                  onClick={() => router.push("/auth")}
                  className="w-full rounded-xl bg-neutral-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  Get Started
                </button>
              </div>
            ) : (
              <div
                className="md:block relative inline-block text-left"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-all focus:outline-none focus:ring-2 focus:ring-neutral-400 overflow-hidden"
                >
                  <User className="h-5 w-5 text-neutral-600" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-neutral-100 bg-white p-1.5 shadow-xl ring-1 ring-black/5 z-50">
                    <div className="px-3 py-2 border-b border-neutral-50 mb-1">
                      <p className="text-sm font-semibold text-neutral-800 truncate">
                        {session.user.name || "User"}
                      </p>

                      <p className="text-xs font-medium text-neutral-400 capitalize mt-0.5">
                        {(session.user as any).role || "Member"}
                      </p>
                    </div>

                    <div className="space-y-0.5">
                      <a
                        href="/add-cafe"
                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <PlusCircle className="h-4 w-4 text-neutral-500" />
                        Add Your Cafe
                      </a>

                      <button
                        onClick={() => signOut()}
                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50/60 transition-colors"
                      >
                        <LogOut className="h-4 w-4 text-red-500" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-2 md:hidden">
            {session?.user && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-all overflow-hidden"
                >
                  <User className="h-5 w-5 text-neutral-600" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-neutral-100 bg-white p-1.5 shadow-xl ring-1 ring-black/5 z-50">
                    <div className="px-3 py-2 border-b border-neutral-50 mb-1">
                      <p className="text-sm font-semibold text-neutral-800 truncate">
                        {session.user.name || "User"}
                      </p>

                      <p className="text-xs font-medium text-neutral-400 capitalize mt-0.5">
                        {(session.user as any).role || "Member"}
                      </p>
                    </div>

                    <div className="space-y-0.5">
                      <a
                        href="/add-cafe"
                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <PlusCircle className="h-4 w-4 text-neutral-500" />
                        Add Your Cafe
                      </a>

                      <button
                        onClick={() => signOut()}
                        className="flex items-center gap-2.5 w-full px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50/60 transition-colors"
                      >
                        <LogOut className="h-4 w-4 text-red-500" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 focus:outline-none"
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <span className="text-xl block h-6 w-6 text-center leading-6">
                  ✕
                </span>
              ) : (
                <span className="text-xl block h-6 w-6 text-center leading-6">
                  ☰
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden border-b border-neutral-200 bg-white"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-4 pt-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-amber-50 text-amber-900 font-bold"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {!session?.user && (
              <div className="pt-4 mt-2 border-t border-neutral-100 px-3">
                <button
                  onClick={() => router.push("/auth")}
                  className="w-full rounded-xl bg-neutral-900 py-2.5 text-center text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}