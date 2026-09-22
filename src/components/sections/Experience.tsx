import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-5xl">
      <h2 className="mb-6 text-2xl font-bold text-black dark:text-zinc-50">
        경력
      </h2>

      <div className="flex flex-col gap-4">
        {experiences.map((e) => (
          <div
            key={e.company}
            className="rounded-2xl border border-black/[.08] bg-white p-6 dark:border-white/[.1] dark:bg-zinc-950"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-[15px] font-bold text-black dark:text-zinc-50">
                {e.company}
              </h3>
              <span className="font-mono text-sm text-zinc-400">
                {e.period}
              </span>
            </div>

            <div className="mt-1 text-[13px] text-blue-600 dark:text-blue-400">
              {e.role}
            </div>

            <div className="mt-3 flex flex-col gap-1">
              {e.bullets.map((b) => (
                <div
                  key={b}
                  className="pl-1 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  ▸ {b}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}