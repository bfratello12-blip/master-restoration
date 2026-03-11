import Link from "next/link";

const values = [
  {
    title: "Fast emergency response",
    description: "We move quickly to reduce additional damage and start recovery.",
  },
  {
    title: "Honest communication",
    description: "Clear updates and practical guidance throughout your project.",
  },
  {
    title: "Thorough restoration work",
    description: "Detailed cleanup and restoration standards from start to finish.",
  },
  {
    title: "Respect for your property",
    description: "Professional crews who treat your home or business with care.",
  },
];

const trustPoints = [
  "Local service throughout Suffolk and Nassau County",
  "Water, mold, and fire restoration expertise",
  "Clear guidance through the restoration process",
  "Professional, dependable service from start to finish",
];

const services = [
  {
    title: "Water Damage Restoration",
    description:
      "Emergency water extraction, structural drying, flood cleanup, and full restoration support.",
    href: "/water-damage-restoration",
  },
  {
    title: "Mold Remediation",
    description:
      "Inspection, containment, removal, and remediation services for safer indoor environments.",
    href: "/mold-remediation",
  },
  {
    title: "Fire Damage Restoration",
    description:
      "Fire, smoke, and soot cleanup with dependable restoration and recovery services.",
    href: "/fire-damage-restoration",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Local Restoration Professionals
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Master Restoration helps homeowners and businesses recover from
            water, mold, and fire damage with fast, dependable service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:5555555555"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-500"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Restoration Help When It Matters Most
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Property damage can escalate quickly, which is why our team focuses on
          rapid response and practical solutions from the first call.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          We combine quality restoration workmanship with dependable support to
          help customers navigate stressful situations and move forward with
          confidence.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Stand For</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Homeowners and Businesses Choose Master Restoration
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <article key={point} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-medium text-slate-800">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-5 inline-block font-semibold text-blue-700 transition hover:text-blue-600"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Serving Long Island Communities</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            We proudly serve customers throughout Suffolk County and Nassau
            County with responsive local restoration service.
          </p>
          <Link
            href="/service-areas"
            className="mt-5 inline-block font-semibold text-blue-700 transition hover:text-blue-600"
          >
            View Service Areas →
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Need Restoration Help Now?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Call our team now for fast emergency response and trusted
            restoration support for your property.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:5555555555"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-500"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
