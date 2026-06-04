import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 py-24 sm:py-32">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[350px] rounded-full bg-emerald-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-lg">
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
          <p className="text-sm font-medium tracking-widest uppercase text-emerald-600">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Travaillons ensemble</h2>
          <p className="max-w-md text-slate-600">
            Ce portfolio vous à plus ? N&apos;hésitez pas à me contacter, je serais ravi d&apos;en discuter.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Email */}
          <a
            href="mailto:email@example.com"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-slate-700 shadow-sm transition-all hover:border-emerald-400 hover:text-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span className="text-sm font-medium">jolan.cochet.pro@gmail.com</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jol-cochet-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-emerald-400 hover:text-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jolan-cochet-39949a2b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-emerald-400 hover:text-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/jojo.coch/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-emerald-400 hover:text-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
