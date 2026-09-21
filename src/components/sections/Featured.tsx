import { featuredProjects } from "@/data/featured";

export default function Featured() {
  return (
    <section id="projects" className="w-full max-w-5xl">
      <h2 className="mb-8 text-2xl font-bold text-black dark:text-zinc-50">
        대표 프로젝트{" "}
        <span className="text-blue-600 dark:text-blue-400">Top 6</span>
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-2xl border border-black/[.08] bg-white p-6 transition-transform hover:-translate-y-1 dark:border-white/[.1] dark:bg-zinc-950"
          >
            <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 to-purple-400" />

            <div className="mb-2 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
              {p.num}
            </div>

            <h3 className="mb-2 text-[17px] font-bold leading-snug text-black dark:text-zinc-50">
              {p.title}
            </h3>

            <p className="mb-4 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {p.desc}
            </p>

            <div className="mb-4 flex flex-wrap gap-1">
              {p.metrics.map((m) => (
                <span
                  key={m.label}
                  className={`rounded-full border px-2.5 py-[2px] text-xs ${
                    m.positive
                      ? "border-green-400/30 bg-green-400/10 text-green-500"
                      : "border-blue-400/30 bg-blue-400/10 text-blue-600 dark:text-blue-400"
                  }`}
                >
                  {m.label}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-black/[.08] px-2.5 py-1 text-[11px] font-mono text-zinc-500 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.1] dark:hover:text-blue-400"
            >
              GitHub 바로가기
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

