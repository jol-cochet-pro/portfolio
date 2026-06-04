"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 py-24 sm:py-32">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-87.5 rounded-full bg-emerald-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-lg">
        <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
          <p className="text-sm font-medium tracking-widest uppercase text-emerald-600">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Travaillons ensemble</h2>
          <p className="max-w-md text-slate-600">
            Ce portfolio vous a plus ? N&apos;hésitez pas à me contacter, je serais ravi d&apos;en discuter.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Email */}
          <button
            onClick={() => {
              navigator.clipboard.writeText("jolan.cochet.pro@gmail.com");
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-slate-700 shadow-sm transition-all hover:border-emerald-400 hover:text-emerald-600 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            {copied ? <IoCheckmark className="stroke-emerald-600" /> : <CiMail />}
            <span className="text-sm font-medium">{copied ? "Copié !" : "jolan.cochet.pro@gmail.com"}</span>
          </button>

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
