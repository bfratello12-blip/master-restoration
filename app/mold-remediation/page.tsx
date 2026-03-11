import Link from "next/link";

const handledItems = [
  "Mold Inspection",
  "Mold Removal",
  "Mold Containment",
  "Black Mold Cleanup",
  "Attic Mold Removal",
  "Basement Mold Remediation",
];

const processSteps = [
  "Inspect affected areas and identify moisture sources",
  "Set containment to control cross-contamination",
  "Remove mold-damaged materials safely",
  "Clean and treat surfaces in affected areas",
  "Verify cleanup and provide prevention recommendations",
];

const valuePoints = [
  {
    title: "Fast response",
    description: "Quick action helps reduce spread and additional damage.",
  },
  {
    title: "Experienced team",
    description: "Trained remediation technicians following proven protocols.",
  },
  {
    title: "Thorough cleanup",
    description: "Detailed containment, removal, and post-cleaning treatment.",
  },
  {
    title: "Insurance claim support",
    description: "Documentation support to assist with claim communication.",
  },
];

export default function MoldRemediationPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Professional Mold Remediation Service
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Mold Remediation for Healthier Indoor Environments
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            We identify active mold growth, contain affected spaces, and
            complete safe cleanup so your home or business can recover with
            confidence.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:5555555555"
              className="rounded-md bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-500"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-white/25 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mold Remediation Overview</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Mold growth often follows hidden moisture issues and can spread
          quickly through porous materials. Our remediation process focuses on
          identifying root causes, removing contamination, and restoring safer
          indoor conditions.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Handle</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {handledItems.map((item) => (
              <article key={item} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-900">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Remediation Process</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600">Step {index + 1}</p>
              <p className="mt-2 text-sm font-medium text-slate-800">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Master Restoration</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map((point) => (
              <article key={point.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-slate-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Need Mold Remediation Service Right Away?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Contact our team now for fast local mold remediation and reliable
            support from inspection through cleanup.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:5555555555"
              className="rounded-md bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-500"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-white/25 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
