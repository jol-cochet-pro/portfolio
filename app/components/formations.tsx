const formations = [
  {
    degree: "Architecte en Technologie du Numérique",
    school: "42 Angoulême",
    period: "2024 - 2026",
    description:
      "Formation en peer-to-peer avec une méthodologie par projet pour approfondir toutes mes connaissances en informatique.",
  },
  {
    degree: "BUT Informatique parcours réalisation d'applications : conception, développement, validation",
    school: "IUT Nantes",
    period: "2022 - 2024",
    description:
      "Formation en alternance pour apprendre les concepts fondammentaux en informatique et découvrir le monde de l'entreprise",
  },
];

export default function Formations() {
  return (
    <section id="formations" className="relative isolate px-6 py-24 sm:py-32">
      {/* Section background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/50 to-white"
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
          <p className="text-sm font-medium tracking-widest uppercase text-emerald-600">Parcours</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mes formations</h2>
          <p className="max-w-md text-slate-600">Mon parcours académique et professionnel.</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {formations.map((formation, index) => (
            <div
              key={formation.degree}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Left accent bar */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-l-2xl" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="pl-4">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {formation.degree}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-slate-400">{formation.school}</p>
                </div>

                {/* Year badge */}
                <span className="shrink-0 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {formation.period}
                </span>
              </div>

              <p className="mt-4 pl-4 text-sm leading-relaxed text-slate-600">{formation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
