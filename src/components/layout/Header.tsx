"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { href: "#experience", label: "경력" },
  { href: "#projects", label: "프로젝트" },
  { href: "#all-projects", label: "전체 프로젝트" },
  { href: "#side-projects", label: "사이드 프로젝트" },
  { href: "#skills", label: "기술" },
  { href: "#education", label: "학력" },
  { href: "#contact", label: "연락처" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-black/[.08] bg-white/80 px-6 py-3 backdrop-blur-md dark:border-white/[.1] dark:bg-black/80">
        <span className="text-lg font-bold text-black dark:text-zinc-50">
          JongHun Lee
        </span>

        <div className="flex items-center gap-4">
          {/* 큰 화면: 가로 메뉴 */}
          <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-black dark:hover:text-zinc-50"
              >
                {l.label}
              </a>
            ))}
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[.08] text-zinc-600 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.1] dark:text-zinc-400"
              aria-label="테마 전환"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

          {/* 작은 화면: 햄버거 버튼 */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[.08] text-zinc-600 dark:border-white/[.1] dark:text-zinc-400 lg:hidden"
            aria-label="메뉴 열기"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-2 flex flex-col rounded-2xl border border-black/[.08] bg-white/95 p-2 backdrop-blur-md dark:border-white/[.1] dark:bg-zinc-950/95 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}