"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/water-damage-restoration", label: "Water Damage" },
  { href: "/mold-remediation", label: "Mold Remediation" },
  { href: "/fire-damage-restoration", label: "Fire Damage" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/before-after", label: "Before & After" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/" className="shrink-0" aria-label="Master Restoration Home">
          <Image
            src="/master_restoration_logo_rebuilt.svg"
            alt="Master Restoration logo"
            width={420}
            height={124}
            className="h-14 w-auto sm:h-16 lg:h-20"
            priority
          />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center gap-x-5 text-sm font-medium text-slate-700 md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-1 py-1 transition hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:6316209793"
            className="ml-auto hidden items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500 md:inline-flex"
          >
            Call Now
          </a>

          <div className="ml-auto flex items-center gap-2 md:hidden">
            <a
              href="tel:6316209793"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500"
            >
              Call Now
            </a>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="primary-mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition hover:bg-slate-100 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M6 18 18 6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            id="primary-mobile-menu"
            aria-label="Primary mobile"
            className="mt-3 rounded-xl border border-slate-200 bg-white p-2 shadow-md md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
