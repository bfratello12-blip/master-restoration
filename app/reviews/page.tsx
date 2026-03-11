import Link from "next/link";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Patchogue, NY",
    quote:
      "After our basement flooded, Master Restoration arrived quickly, removed the water, and kept us informed every step of the way.",
  },
  {
    name: "David R.",
    location: "Huntington, NY",
    quote:
      "Their mold cleanup team was professional, organized, and respectful of our home. The process felt clear from start to finish.",
  },
  {
    name: "Angela T.",
    location: "Smithtown, NY",
    quote:
      "We needed smoke cleanup after a kitchen fire, and they handled everything quickly with excellent communication and care.",
  },
  {
    name: "Michael P.",
    location: "Garden City, NY",
    quote:
      "Fast response and dependable service. They stabilized the damage right away and helped us understand next steps.",
  },
  {
    name: "Jennifer L.",
    location: "Massapequa, NY",
    quote:
      "The crew was courteous, on time, and thorough. You can tell they take pride in quality restoration work.",
  },
  {
    name: "Robert K.",
    location: "Bay Shore, NY",
    quote:
      "Their documentation and insurance claim support made a stressful situation much easier to manage.",
  },
];

const trustPoints = [
  {
    title: "Fast emergency response",
    description: "Rapid local dispatch to reduce damage and begin recovery quickly.",
  },
  {
    title: "Clear communication",
    description: "Straightforward updates so you always know what is happening.",
  },
  {
    title: "Thorough cleanup and restoration",
    description: "Detailed service standards from mitigation through final restoration.",
  },
  {
    title: "Respect for your home or business",
    description: "Professional crews that treat your property with care and attention.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Customer Trust &amp; Reputation
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Reviews</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Master Restoration is committed to fast response, quality
            restoration work, and dependable customer service for every project.
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
          Trusted by Homeowners and Businesses
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          During restoration projects, dependable response time, clear
          communication, and quality workmanship make all the difference.
          Customer feedback reflects our focus on delivering reliable service
          when people need it most.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
            <p className="text-sm font-semibold text-slate-900">Fast Response</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
            <p className="text-sm font-semibold text-slate-900">Local Service</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
            <p className="text-sm font-semibold text-slate-900">Trusted Restoration Team</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Testimonials</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.location}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{testimonial.location}</p>
                <p className="mt-4 text-slate-700">“{testimonial.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Customers Choose Master Restoration
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <article key={point.title} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-2 text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Need Emergency Restoration Service in Your Area?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Our reputation is built on responsive service, quality results, and
            local trust across Long Island. Reach out now for immediate help.
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
