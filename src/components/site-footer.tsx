import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/water-damage-restoration", label: "Water Damage" },
  { href: "/mold-remediation", label: "Mold Remediation" },
  { href: "/fire-damage-restoration", label: "Fire Damage" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:gap-12 lg:px-8">
        <div>
          <h2 className="text-xl font-semibold text-white">Master Restoration</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            24/7 emergency water, mold, and fire damage restoration services for
            homes and businesses.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-blue-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
            <li>
              <a href="tel:5555555555" className="transition hover:text-blue-300">
                (555) 555-5555
              </a>
            </li>
            <li>
              <a
                href="mailto:info@masterrestoration.com"
                className="transition hover:text-blue-300"
              >
                info@masterrestoration.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
