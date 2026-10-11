import { skillCategories } from "@/data/skills";
import { tableauVizzes } from "@/data/tableau";

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl">
      <h2 className="mb-6 text-2xl font-bold text-black dark:text-zinc-50">
        기술
      </h2>

      <div className="overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.1]">
        <table className="w-full border-collapse">
          <tbody>
            {skillCategories.map((sc, i) => (
              <tr
                key={sc.category}
                className={
                  i % 2 === 0
                    ? "bg-white dark:bg-zinc-950"
                    : "bg-zinc-50 dark:bg-zinc-900"
                }
              >
                <td className="w-28 whitespace-nowrap border-b border-black/[.06] px-3 py-3 align-top font-mono text-xs text-blue-600 dark:border-white/[.06] dark:text-blue-400 sm:w-40 sm:px-5 sm:text-sm">
                  {sc.category}
                </td>
                <td className="border-b border-black/[.06] px-3 py-3 text-sm text-zinc-600 dark:border-white/[.06] dark:text-zinc-400 sm:px-5">
                  {sc.items.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-lg font-bold text-black dark:text-zinc-50">
          Tableau Dashboards
        </h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {tableauVizzes.map((v) => (
            <div
              key={v.title}
              className="overflow-hidden rounded-2xl border border-black/[.08] bg-white dark:border-white/[.1] dark:bg-zinc-950"
            >
              <div className="h-[720px] w-full sm:aspect-video sm:h-auto">
                <iframe
                  src={v.embedUrl}
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>
              <div className="flex items-start justify-between gap-3 p-4">
                <div>
                  <div className="text-sm font-bold text-black dark:text-zinc-50">
                    {v.title}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {v.desc}
                  </div>
                </div>
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-full border border-black/[.1] px-3 py-1 font-mono text-[11px] text-zinc-500 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.15]"
                >
                  Tableau에서 보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}