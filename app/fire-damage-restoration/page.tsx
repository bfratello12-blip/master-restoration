import Link from "next/link";

const handledItems = [
  "Fire Damage Cleanup",
  "Smoke Damage Restoration",
  "Soot Removal",
  "Structural Cleanup",
  "Odor Removal",
  "Emergency Board-Up",
];

const processSteps = [
  "Assess damage and secure the property",
  "Remove debris and damaged materials",
  "Clean smoke and soot residues thoroughly",
  "Deodorize and treat affected areas",
  "Restore structural and interior damage",
];

const valuePoints = [
  {
    title: "Fast response",
    description: "Quick stabilization helps prevent additional property loss.",
  },
  {
    title: "Experienced team",
    description: "Restoration professionals trained for complex fire losses.",
  },
  {
    title: "Thorough cleanup",
    description: "Detailed smoke, soot, and odor treatment from top to bottom.",
  },
  {
    title: "Insurance claim support",
    description: "Helpful documentation and updates for your claim process.",
  },
];

export default function FireDamageRestorationPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Fire and Smoke Damage Service
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Fire Damage Restoration to Help You Recover Quickly
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            From emergency board-up to smoke and soot cleanup, we provide
            complete fire damage restoration for residential and commercial
            properties.
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
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Fire Damage Overview</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Fire damage often includes structural impact, smoke residues, soot,
          and persistent odors. Our team coordinates cleanup and restoration to
          stabilize your property, protect unaffected areas, and rebuild with
          care.
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
            Need Fire Damage Restoration Support Now?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Call now for immediate help with fire, smoke, and soot damage,
            plus dependable full-service restoration.
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
