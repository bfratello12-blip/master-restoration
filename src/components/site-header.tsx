import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-4 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Master Restoration Home">
          <Image
            src="/Untitled_design__2_-removebg-preview%20(1).png"
            alt="Master Restoration logo"
            width={190}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="flex flex-1 flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:5555555555"
          className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
