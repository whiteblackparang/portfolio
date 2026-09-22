export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-5xl">
      <nav className="flex items-center justify-between rounded-full border border-black/[.08] bg-white/80 px-6 py-3 backdrop-blur-md dark:border-white/[.1] dark:bg-black/80">
        <span className="text-lg font-bold text-black dark:text-zinc-50">
          JongHun Lee
        </span>

<div className="hidden gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:flex">
  <a href="#about" className="hover:text-black dark:hover:text-zinc-50">
    소개
  </a>
  <a href="#experience" className="hover:text-black dark:hover:text-zinc-50">
    경력
  </a>
  <a href="#projects" className="hover:text-black dark:hover:text-zinc-50">
    프로젝트
  </a>
  <a href="#all-projects" className="hover:text-black dark:hover:text-zinc-50">
    전체 프로젝트
  </a>
  <a href="#side-projects" className="hover:text-black dark:hover:text-zinc-50">
    사이드 프로젝트
  </a>
  <a href="#skills" className="hover:text-black dark:hover:text-zinc-50">
    기술
  </a>
  <a href="#education" className="hover:text-black dark:hover:text-zinc-50">
    학력
  </a>
</div>
      </nav>
    </header>
  );
}