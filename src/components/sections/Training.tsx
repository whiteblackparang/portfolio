// src/components/sections/Training.tsx
import { trainings, additionalCourses } from "@/data/training";

export default function Training() {
  return (
    <section id="training" className="w-full max-w-5xl">
      <h2 className="mb-6 text-2xl font-bold text-black dark:text-zinc-50">
        교육 및 활동
      </h2>

      <div className="flex flex-col gap-4">
        {trainings.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl border border-black/[.08] bg-white p-6 dark:border-white/[.1] dark:bg-zinc-950"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-[15px] font-bold text-black dark:text-zinc-50">
                  {t.title}
                </h3>
                {t.org && (
                  <div className="font-mono text-xs text-zinc-400">{t.org}</div>
                )}
              </div>
              <span className="font-mono text-sm text-zinc-400">{t.period}</span>
            </div>

            <div className="mt-3 flex flex-col gap-1">
              {t.bullets.map((b) => (
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

      {/* 추가 이수 과정 */}
      <div className="mt-8 flex flex-col gap-4">
        {additionalCourses.map((c) => (
          <div key={c.year} className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-sm text-zinc-400">{c.year}</span>
            {c.courses.map((course) => (
              <span
                key={course}
                className="rounded-full border border-black/[.08] bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:border-white/[.1] dark:bg-zinc-900 dark:text-zinc-400"
              >
                {course}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}