export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            24/7 Emergency Restoration Services
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Fast Water, Mold, and Fire Damage Restoration When You Need It Most
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We respond quickly to protect your home or business from further
            damage with expert restoration, cleanup, and recovery services.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:5555555555"
              className="rounded-md bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Call Now
            </a>

            <a
              href="/contact"
              className="rounded-md border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
            >
              Request Emergency Service
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Professional restoration services designed to help you recover
            quickly and safely.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Water Damage Restoration</h3>
            <p className="mt-3 text-slate-600">
              Emergency water removal, structural drying, flood cleanup, and
              damage recovery.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Mold Remediation</h3>
            <p className="mt-3 text-slate-600">
              Mold inspection, containment, cleanup, and remediation to restore
              a safe environment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Fire Damage Restoration</h3>
            <p className="mt-3 text-slate-600">
              Fire, smoke, and soot cleanup with fast response to stabilize and
              restore your property.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}