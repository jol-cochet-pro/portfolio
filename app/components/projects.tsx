const projects = [
  {
    title: "TrentApp",
    company: "Trent",
    description:
      "Application mobile permettant aux personnes de vérifier les avis de leur futur location avant de s'engager.",
    tags: ["Flutter", "NestJS", "PostgreSQL", "GCP"],
    href: "https://play.google.com/store/apps/details?id=com.trentapp.mobile",
  },
  {
    title: "Inventory Management",
    company: "Le Sourire d'Onja",
    description: "Application de gestion d'inventaire pour l'association Le Sourire d'Onja.",
    tags: ["NextJS", "PostgreSQL", "OVH", "Docker"],
    href: "https://lesouriredonja.com/",
  },
  {
    title: "Livret Scolaire",
    company: "Fab'Academy",
    description: "Application d'automatisation d'export de livret scolaire basé sur les données de l'ERP.",
    tags: ["React", "Flask", "MSSQL", "Docker"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="relative isolate px-6 py-24 sm:py-32">
      {/* Section background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/50 to-white"
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
          <p className="text-sm font-medium tracking-widest uppercase text-emerald-600">Réalisations</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mes projets</h2>
          <p className="max-w-md text-slate-600">
            Une sélection de projets sur lesquels j&apos;ai travaillé récemment.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="mb-5 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-teal-50">
                <span className="text-4xl font-bold text-emerald-300/50">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h3>
              <h4 className="text-sm font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors">
                {project.company}
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
