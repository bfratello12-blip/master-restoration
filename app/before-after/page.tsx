import Link from "next/link";

const projects = [
  {
    title: "Basement Flood Recovery",
    summary:
      "Rapid water extraction and drying helped return a finished basement to clean, usable condition.",
    serviceType: "Water Damage",
    location: "Patchogue, NY",
  },
  {
    title: "Attic Mold Cleanup",
    summary:
      "Containment and remediation removed widespread attic mold and improved indoor air quality.",
    serviceType: "Mold Remediation",
    location: "Huntington, NY",
  },
  {
    title: "Kitchen Fire Restoration",
    summary:
      "Smoke and soot cleanup with targeted repairs restored a fire-damaged kitchen space.",
    serviceType: "Fire Damage",
    location: "Smithtown, NY",
  },
  {
    title: "Burst Pipe Damage Repair",
    summary:
      "Emergency mitigation and reconstruction addressed water loss from a burst interior pipe.",
    serviceType: "Water Damage",
    location: "Massapequa, NY",
  },
  {
    title: "Basement Mold Remediation",
    summary:
      "Source identification, mold removal, and preventive treatment restored the lower level safely.",
    serviceType: "Mold Remediation",
    location: "Freeport, NY",
  },
  {
    title: "Smoke Odor Elimination Project",
    summary:
      "Deep cleaning and deodorization eliminated persistent smoke odors after a residential fire.",
    serviceType: "Fire Damage",
    location: "Bay Shore, NY",
  },
];

const valuePoints = [
  {
    title: "Shows real restoration outcomes",
    description:
      "Project examples help homeowners and businesses see what professional recovery can achieve.",
  },
  {
    title: "Highlights attention to detail",
    description:
      "Before-and-after comparisons reflect quality workmanship from cleanup to final restoration.",
  },
  {
    title: "Builds trust with local customers",
    description:
      "Visual proof gives confidence that your property is in experienced hands.",
  },
  {
    title: "Demonstrates service capability",
    description:
      "Examples across water, mold, and fire damage show versatile restoration expertise.",
  },
];

const serviceCategories = [
  {
    title: "Water Damage Restoration",
    description:
      "From emergency extraction to full repairs, we restore properties affected by leaks and flooding.",
    href: "/water-damage-restoration",
  },
  {
    title: "Mold Remediation",
    description:
      "We inspect, contain, and remove mold contamination while helping prevent future growth.",
    href: "/mold-remediation",
  },
  {
    title: "Fire Damage Restoration",
    description:
      "Our team handles fire, smoke, and soot cleanup with complete restoration support.",
    href: "/fire-damage-restoration",
  },
];

export default function BeforeAfterPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Real Restoration Results
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Before &amp; After
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Master Restoration helps restore homes and businesses after water,
            mold, and fire damage with fast response and quality workmanship.
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          See the Difference Professional Restoration Makes
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Fast action, expert cleanup, and proper restoration can transform
          heavily damaged spaces into safe, functional environments again.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Showcase</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={`${project.title}-${project.location}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-100 px-4 py-10 text-center text-sm font-medium text-slate-500">
                  Before &amp; After Project Image
                </div>
                <p className="mt-5 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {project.serviceType}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-slate-600">{project.summary}</p>
                <p className="mt-3 text-sm font-medium text-slate-500">{project.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Before &amp; After Projects Matter
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valuePoints.map((point) => (
            <article key={point.title} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Service Categories
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((service) => (
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

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Need Help Restoring Your Property?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Call now for fast local restoration support and dependable service
            for water, mold, and fire damage.
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
