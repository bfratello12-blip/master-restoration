import Link from "next/link";

const trustPoints = [
  {
    title: "Fast local response",
    description: "Quick dispatch across Suffolk and Nassau County when damage occurs.",
  },
  {
    title: "Clear communication",
    description: "Straightforward updates so you always know what comes next.",
  },
  {
    title: "Experienced restoration team",
    description: "Professional support for water, mold, and fire damage recovery.",
  },
  {
    title: "Help with next steps and insurance support",
    description: "Guidance and documentation assistance throughout the process.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Emergency Help Starts Here
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Master Restoration provides fast response for water damage,
            mold remediation, and fire damage restoration across Long Island.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:5555555555"
              className="rounded-md bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-500"
            >
              Call Now
            </a>
            <a
              href="#request-service"
              className="rounded-md border border-white/25 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Request Emergency Service
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Fast Restoration Help</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Call now or send a service request to connect with our team. During
          property damage emergencies, fast response can help reduce further
          loss and speed up recovery.
        </p>
      </section>

      <section id="request-service" className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Contact Details</h3>
              <dl className="mt-5 space-y-4 text-slate-700">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phone</dt>
                  <dd className="mt-1 text-lg font-medium">
                    <a href="tel:5555555555" className="transition hover:text-blue-700">
                      (555) 555-5555
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Email</dt>
                  <dd className="mt-1 text-lg font-medium">
                    <a
                      href="mailto:info@masterrestoration.com"
                      className="transition hover:text-blue-700"
                    >
                      info@masterrestoration.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Service Area</dt>
                  <dd className="mt-1 text-lg font-medium">Suffolk County &amp; Nassau County</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Emergency Availability</dt>
                  <dd className="mt-1 text-lg font-medium text-red-600">24/7 Emergency Response</dd>
                </div>
              </dl>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Main Services</h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Water Damage Restoration</li>
                <li>• Mold Remediation</li>
                <li>• Fire Damage Restoration</li>
              </ul>
            </article>
          </div>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Request Service</h3>
            <p className="mt-2 text-slate-600">
              Fill out the form below and our team will follow up quickly.
            </p>

            <form className="mt-6 space-y-4" action="#" method="post">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm outline-none ring-blue-600/40 placeholder:text-slate-400 focus:ring"
                  placeholder="Your name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm outline-none ring-blue-600/40 placeholder:text-slate-400 focus:ring"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm outline-none ring-blue-600/40 placeholder:text-slate-400 focus:ring"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className="text-sm font-medium text-slate-700">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm outline-none ring-blue-600/40 focus:ring"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="water">Water Damage Restoration</option>
                    <option value="mold">Mold Remediation</option>
                    <option value="fire">Fire Damage Restoration</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className="text-sm font-medium text-slate-700">
                    City / Town
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm outline-none ring-blue-600/40 placeholder:text-slate-400 focus:ring"
                    placeholder="Your city or town"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm outline-none ring-blue-600/40 placeholder:text-slate-400 focus:ring"
                  placeholder="Tell us about the damage and what you need help with."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
              >
                Request Service
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need Immediate Help?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            If you have active water, mold, or fire damage, call now for the
            fastest response and immediate restoration support.
          </p>
          <a
            href="tel:5555555555"
            className="mt-6 inline-block rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500"
          >
            Call Now
          </a>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Contact Us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <article key={point.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-slate-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            24/7 Emergency Restoration Service Is Always Available
          </h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:5555555555"
              className="rounded-md bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-500"
            >
              Call Now
            </a>
            <Link
              href="/service-areas"
              className="rounded-md border border-white/25 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              View Service Areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
