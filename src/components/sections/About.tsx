// src/components/sections/About.tsx
import { aboutDescription, contactLinks } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="flex w-full max-w-5xl flex-col items-center">
      <h2 className="mb-6 text-2xl font-bold text-black dark:text-zinc-50">
        소개
      </h2>

      <div className="w-full rounded-2xl border border-black/[.08] bg-white p-6 text-center dark:border-white/[.1] dark:bg-zinc-950 sm:p-8">
        <p className="mx-auto max-w-2xl text-[15px] leading-loose text-zinc-600 dark:text-zinc-400">
          {aboutDescription}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.url}
              target={c.icon === "email" ? undefined : "_blank"}
              rel={c.icon === "email" ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 rounded-lg border border-black/[.08] bg-zinc-50 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.1] dark:bg-zinc-900 dark:text-zinc-400"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}