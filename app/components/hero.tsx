import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 size-[500px] animate-blob rounded-full bg-emerald-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 -z-10 size-[400px] animate-blob rounded-full bg-teal-200/30 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />

      <div className="flex flex-col items-center gap-6 text-center animate-fade-in">
        <p className="text-sm font-medium tracking-widest uppercase text-emerald-600 animate-slide-down">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Jolan
          <span className="text-emerald-500"> Cochet</span>
        </h1>

        <p className="max-w-lg text-lg leading-relaxed text-slate-600">
          Développeur fullstack, j’aime concevoir des solutions utiles et bien pensées. Curieux et motivé par les défis techniques, je m’adapte vite et cherche constamment à améliorer mes compétences pour offrir la meilleure expérience possible aux utilisateurs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="#projets"
            className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-600 px-8 text-sm font-medium text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.97]"
          >
            Voir mes projets
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-sm font-medium text-slate-700 transition-all hover:border-emerald-400 hover:text-emerald-600 active:scale-[0.97]"
          >
            Me contacter
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs font-medium text-slate-400">Scroller</span>
        <div className="size-5 animate-bounce rounded-full border-2 border-slate-300" />
      </div>
    </section>
  );
}
