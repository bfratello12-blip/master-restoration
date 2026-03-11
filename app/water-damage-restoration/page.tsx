import Link from "next/link";

const handledItems = [
  "Emergency Water Extraction",
  "Structural Drying",
  "Flood Cleanup",
  "Burst Pipe Cleanup",
  "Basement Water Removal",
  "Sewage Backup Cleanup",
];

const processSteps = [
  "Inspect and assess the water damage",
  "Extract standing water quickly",
  "Dry and dehumidify affected materials",
  "Clean, sanitize, and prevent secondary damage",
  "Restore damaged areas and complete walkthrough",
];

const valuePoints = [
  {
    title: "Fast response",
    description: "Rapid dispatch helps limit structural and contents damage.",
  },
  {
    title: "Experienced team",
    description: "Skilled technicians trained in drying and restoration best practices.",
  },
  {
    title: "Thorough cleanup",
    description: "Detailed drying, cleaning, and monitoring for a safer recovery.",
  },
  {
    title: "Insurance claim support",
    description: "Clear documentation and communication to help streamline claims.",
  },
];

export default function WaterDamageRestorationPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Emergency Water Damage Service
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Water Damage Restoration for Homes and Businesses
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            When water damage strikes, our local team responds quickly with
            extraction, drying, cleanup, and repairs to protect your property.
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Water Damage Overview</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          From sudden leaks to major flooding, water can spread fast and weaken
          building materials. Our restoration process is designed to remove
          water quickly, dry the structure thoroughly, and restore affected
          areas with minimal disruption.
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Restoration Process</h2>
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
            Need Immediate Water Damage Help?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Call now for rapid local response and professional water damage
            restoration service.
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
