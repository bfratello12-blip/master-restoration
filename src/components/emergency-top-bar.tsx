export default function EmergencyTopBar() {
  return (
    <div className="border-b border-red-500 bg-red-700 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-2 text-sm lg:px-8">
        <p className="font-semibold tracking-wide">24/7 Emergency Restoration Service</p>

        <div className="flex items-center gap-3">
          <span className="hidden text-red-100 md:inline">
            Fast Response for Water, Mold &amp; Fire Damage
          </span>
          <a
            href="tel:5555555555"
            className="inline-flex items-center rounded-md bg-white px-3 py-1 font-bold text-red-700 transition hover:bg-red-50"
          >
            (555) 555-5555
          </a>
        </div>
      </div>
    </div>
  );
}
