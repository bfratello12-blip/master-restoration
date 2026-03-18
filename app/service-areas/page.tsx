import Link from "next/link";

const suffolkTowns = [
  "Amagansett",
  "Amityville",
  "Aquebogue",
  "Babylon",
  "Bay Shore",
  "Bayport",
  "Bellport",
  "Blue Point",
  "Bohemia",
  "Brentwood",
  "Bridgehampton",
  "Brightwaters",
  "Brookhaven",
  "Calverton",
  "Center Moriches",
  "Centereach",
  "Centerport",
  "Central Islip",
  "Cold Spring Harbor",
  "Commack",
  "Copiague",
  "Coram",
  "Cutchogue",
  "Deer Park",
  "East Hampton",
  "East Islip",
  "East Marion",
  "East Moriches",
  "East Northport",
  "East Quogue",
  "East Setauket",
  "Eastport",
  "Farmingville",
  "Fishers Island",
  "Great River",
  "Greenlawn",
  "Greenport",
  "Hampton Bays",
  "Hauppauge",
  "Holbrook",
  "Holtsville",
  "Huntington",
  "Huntington Station",
  "Islandia",
  "Islip",
  "Islip Terrace",
  "Jamesport",
  "Kings Park",
  "Lake Grove",
  "Laurel",
  "Lindenhurst",
  "Manorville",
  "Mastic",
  "Mastic Beach",
  "Mattituck",
  "Medford",
  "Melville",
  "Middle Island",
  "Miller Place",
  "Montauk",
  "Moriches",
  "Mount Sinai",
  "Nesconset",
  "New Suffolk",
  "North Babylon",
  "Northport",
  "Oakdale",
  "Ocean Beach",
  "Orient",
  "Patchogue",
  "Peconic",
  "Port Jefferson",
  "Port Jefferson Station",
  "Quogue",
  "Remsenburg",
  "Ridge",
  "Riverhead",
  "Rocky Point",
  "Ronkonkoma",
  "Sag Harbor",
  "Sagaponack",
  "Saint James",
  "Sayville",
  "Selden",
  "Shelter Island",
  "Shelter Island Heights",
  "Shirley",
  "Shoreham",
  "Smithtown",
  "Sound Beach",
  "South Jamesport",
  "Southampton",
  "Southold",
  "Speonk",
  "Stony Brook",
  "Upton",
  "Wading River",
  "Wainscott",
  "Water Mill",
  "West Babylon",
  "West Islip",
  "West Sayville",
  "Westhampton",
  "Westhampton Beach",
  "Wyandanch",
  "Yaphank",
].sort((a, b) => a.localeCompare(b));

const nassauTowns = [
  "Albertson",
  "Atlantic Beach",
  "Baldwin",
  "Bayville",
  "Bellmore",
  "Bethpage",
  "Carle Place",
  "Cedarhurst",
  "East Meadow",
  "East Norwich",
  "East Rockaway",
  "Elmont",
  "Farmingdale",
  "Floral Park",
  "Franklin Square",
  "Freeport",
  "Garden City",
  "Glen Cove",
  "Glen Head",
  "Glenwood Landing",
  "Great Neck",
  "Greenvale",
  "Hempstead",
  "Hewlett",
  "Hicksville",
  "Inwood",
  "Island Park",
  "Jericho",
  "Lawrence",
  "Levittown",
  "Locust Valley",
  "Long Beach",
  "Lynbrook",
  "Malverne",
  "Manhasset",
  "Massapequa",
  "Massapequa Park",
  "Merrick",
  "Mill Neck",
  "Mineola",
  "New Hyde Park",
  "Oceanside",
  "Old Bethpage",
  "Old Westbury",
  "Oyster Bay",
  "Plainview",
  "Point Lookout",
  "Port Washington",
  "Rockville Centre",
  "Roosevelt",
  "Roslyn",
  "Roslyn Heights",
  "Sea Cliff",
  "Seaford",
  "Syosset",
  "Uniondale",
  "Valley Stream",
  "Wantagh",
  "West Hempstead",
  "Westbury",
  "Williston Park",
  "Woodbury",
  "Woodmere",
].sort((a, b) => a.localeCompare(b));

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
      "Mold inspection, containment, and professional cleanup for homes and businesses.",
    href: "/mold-remediation",
  },
  {
    title: "Fire Damage Restoration",
    description:
      "Fire, smoke, and soot cleanup with responsive restoration services after property loss.",
    href: "/fire-damage-restoration",
  },
];

export default function ServiceAreasPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Local Restoration Coverage
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Service Areas
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Master Restoration provides water damage restoration, mold
            remediation, and fire damage restoration services throughout Suffolk
            County and Nassau County, New York.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:6316209793"
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
          Restoration Services Across Long Island
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          We serve homes and businesses across both counties with fast emergency
          response, dependable communication, and complete restoration support
          from cleanup through recovery.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Suffolk County
            </h2>
            <p className="mt-3 text-slate-600">
              We provide emergency restoration service across Suffolk County communities.
            </p>
            <ul className="mt-8 grid gap-x-6 gap-y-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
              {suffolkTowns.map((town) => (
                <li key={town} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                  {town}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nassau County</h2>
          <p className="mt-3 text-slate-600">
            Our team also serves Nassau County with quick local restoration response.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {nassauTowns.map((town) => (
              <li key={town} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                {town}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services Available Throughout Our Coverage Area
          </h2>
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

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Need Emergency Restoration Service in Your Area?
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Call Master Restoration now for fast local response in Suffolk and
            Nassau County.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:6316209793"
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
