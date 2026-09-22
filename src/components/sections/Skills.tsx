// src/components/sections/Skills.tsx
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
                <td className="w-40 whitespace-nowrap border-b border-black/[.06] px-5 py-3 font-mono text-sm text-blue-600 dark:border-white/[.06] dark:text-blue-400">
                  {sc.category}
                </td>
                <td className="border-b border-black/[.06] px-5 py-3 text-sm text-zinc-600 dark:border-white/[.06] dark:text-zinc-400">
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
        <div className="aspect-video w-full">
          <iframe
            src={v.embedUrl}
            className="h-full w-full border-0"
            allowFullScreen
          />
        </div>
        <div className="p-4">
          <div className="text-sm font-bold text-black dark:text-zinc-50">
            {v.title}
          </div>
          <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {v.desc}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}