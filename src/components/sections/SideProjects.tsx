// src/components/sections/SideProjects.tsx
import { sideProjects } from "@/data/side-projects";

export default function SideProjects() {
  return (
    <section id="side-projects" className="w-full max-w-5xl">
      <h2 className="mb-6 text-2xl font-bold text-black dark:text-zinc-50">
        사이드 프로젝트
      </h2>

      <div className="flex flex-col gap-4">
        {sideProjects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-black/[.08] bg-white p-6 dark:border-white/[.1] dark:bg-zinc-950"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-[15px] font-bold text-black dark:text-zinc-50">
                {p.title}
              </h3>

              <div className="flex gap-2">
                {p.kaggle && (
                  <a
                    href={p.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/[.1] px-2.5 py-[3px] font-mono text-[11px] text-zinc-500 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.15]"
                  >
                    Kaggle
                  </a>
                )}

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/[.1] px-2.5 py-[3px] font-mono text-[11px] text-zinc-500 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.15]"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="mt-1 font-mono text-xs text-zinc-400">
              {p.platform}
            </div>

            <p className="mt-3 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {p.desc}
            </p>

            <div className="mt-3 flex flex-col gap-1">
              {p.highlights.map((h) => (
                <div
                  key={h}
                  className="pl-1 text-xs leading-snug text-zinc-600 dark:text-zinc-400"
                >
                  ▸ {h}
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {p.metrics.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-[2px] text-xs text-green-500"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="mt-3 border-t border-black/[.06] pt-2 font-mono text-[11px] text-zinc-400 dark:border-white/[.08]">
              {p.stack}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}