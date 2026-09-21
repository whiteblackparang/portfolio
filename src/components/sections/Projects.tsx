// src/components/sections/Projects.tsx
"use client";

import { useState } from "react";
import {
  projects,
  categoryLabels,
  categoryColors,
  type ProjectCategory,
} from "@/data/projects";

const categories: (ProjectCategory | "all")[] = [
  "all",
  "ml",
  "dl",
  "nlp",
  "ts",
  "product",
  "sql",
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="all-projects" className="w-full max-w-5xl">
      <h2 className="mb-6 text-2xl font-bold text-black dark:text-zinc-50">
        전체 프로젝트
      </h2>

      {/* 필터 바 */}
      <div className="mb-7 flex flex-wrap items-center gap-2">
        <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
          filter
        </span>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              active === cat
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-black/[.1] text-zinc-600 hover:border-blue-500 hover:text-blue-600 dark:border-white/[.15] dark:text-zinc-400"
            }`}
          >
            {cat === "all" ? "전체" : categoryLabels[cat]}
          </button>
        ))}

        <span className="ml-auto font-mono text-xs text-zinc-400">
          표시:{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {filtered.length}
          </span>
          개
        </span>
      </div>

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.title + p.github}
            className="flex flex-col gap-2.5 rounded-2xl border border-black/[.08] bg-white p-5 transition-transform hover:-translate-y-1 dark:border-white/[.1] dark:bg-zinc-950"
          >
            <div className="flex items-center justify-between gap-2">
              <span
                className="rounded-full px-2.5 py-[3px] font-mono text-[10px] font-bold tracking-wider"
                style={{
                  color: categoryColors[p.category],
                  backgroundColor: `${categoryColors[p.category]}22`,
                }}
              >
                {categoryLabels[p.category]}
              </span>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/[.1] px-2 py-[2px] font-mono text-[11px] text-zinc-500 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.15]"
              >
                GitHub
              </a>
            </div>

            <div className="text-[15px] font-bold leading-snug text-black dark:text-zinc-50">
              {p.title}
            </div>

            <div className="font-mono text-[11px] text-zinc-400">
              {p.sub}
            </div>

            <p className="text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {p.desc}
            </p>

            {p.highlights.length > 0 && (
              <div className="flex flex-col gap-1">
                {p.highlights.map((h) => (
                  <div
                    key={h}
                    className="pl-1 text-xs leading-snug text-zinc-600 dark:text-zinc-400"
                  >
                    ▸ {h}
                  </div>
                ))}
              </div>
            )}

            {p.metrics.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-blue-400/30 bg-blue-400/10 px-2.5 py-[2px] text-xs text-blue-600 dark:text-blue-400"
                  >
                    {m}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-auto border-t border-black/[.06] pt-2 font-mono text-[11px] text-zinc-400 dark:border-white/[.08]">
              {p.stack}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
