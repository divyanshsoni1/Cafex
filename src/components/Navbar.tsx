"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

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
          <div className="hidden md:flex items-center gap-1">
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

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="rounded-xl bg-neutral-950 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-all shadow-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button Control */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <span className="text-xl block h-6 w-6 text-center leading-6">✕</span>
              ) : (
                <span className="text-xl block h-6 w-6 text-center leading-6">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white" id="mobile-menu">
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
            <div className="pt-4 mt-2 border-t border-neutral-100 px-3">
              <button className="w-full rounded-xl bg-neutral-900 py-2.5 text-center text-sm font-semibold text-white hover:bg-neutral-800">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}