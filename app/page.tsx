import Link from "next/link";

const services = [
  {
    title: "Water Damage Restoration",
    description:
      "Emergency water removal, structural drying, flood cleanup, and full property restoration.",
    href: "/water-damage-restoration",
  },
  {
    title: "Mold Remediation",
    description:
      "Inspection, containment, removal, and remediation services to restore a safer indoor environment.",
    href: "/mold-remediation",
  },
  {
    title: "Fire Damage Restoration",
    description:
      "Fire, smoke, and soot cleanup with dependable restoration support after property damage.",
    href: "/fire-damage-restoration",
  },
];

const values = [
  {
    title: "Rapid response",
    description:
      "Our team is ready around the clock to reduce damage and begin restoration quickly.",
  },
  {
    title: "Experienced technicians",
    description:
      "Skilled restoration professionals with practical experience across residential and commercial losses.",
  },
  {
    title: "Thorough cleanup",
    description:
      "Detailed cleanup and drying standards designed to protect your property and peace of mind.",
  },
  {
    title: "Insurance claim support",
    description:
      "Clear documentation and communication to make the insurance process smoother.",
  },
];

const processSteps = [
  "Inspect the damage",
  "Remove water or debris",
  "Dry and clean affected areas",
  "Restore damaged property",
  "Final walkthrough",
];

const serviceAreas = ["Downtown", "North County", "Westside", "Lakeside"];

const reviews = [
  {
    quote:
      "Master Restoration arrived quickly after our pipe burst and got everything dried out fast. Professional from start to finish.",
    name: "Sarah M.",
  },
  {
    quote:
      "Their mold remediation team explained each step clearly and left our home clean and safe. Highly recommend.",
    name: "David R.",
  },
  {
    quote:
      "After a kitchen fire, they handled smoke cleanup and repairs with care. Great communication and quality work.",
    name: "Angela T.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            24/7 Emergency Restoration Services
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Emergency Water, Mold, and Fire Damage Restoration You Can Trust
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Master Restoration delivers fast local response, expert cleanup, and
            dependable repair services to help homes and businesses recover.
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
              Request Emergency Service
            </Link>
          </div>

          <ul className="mt-10 grid gap-3 text-sm sm:grid-cols-3 sm:gap-6">
            <li className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-slate-100">
              24/7 Emergency Response
            </li>
            <li className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-slate-100">
              Fast Local Service
            </li>
            <li className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-slate-100">
              Water • Fire • Mold Experts
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Professional restoration solutions tailored to urgent property damage
          events.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
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
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Restoration Process
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                Step {index + 1}
              </p>
              <p className="mt-2 font-medium text-slate-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Service Areas
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            We proudly serve homeowners and businesses across nearby communities
            with fast, local emergency restoration support.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700"
              >
                {area}
              </li>
            ))}
          </ul>

          <Link
            href="/service-areas"
            className="mt-6 inline-block font-semibold text-blue-700 transition hover:text-blue-600"
          >
            View all service areas →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What Customers Say
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-slate-700">“{review.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Need Immediate Restoration Help? We’re Ready 24/7.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Contact Master Restoration now for rapid response and reliable
            service for water, mold, and fire damage emergencies.
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