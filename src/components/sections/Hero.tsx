export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
        JongHun Lee
      </h1>

      <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
        Data Analyst
      </p>

      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        데이터로 문제를 해결하는 데이터 분석가입니다.
        <br />
        SQL과 Python을 활용해 비즈니스 문제를 데이터로 분석합니다.
      </p>

      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          href="/resume.pdf"
          download
          className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          이력서 다운로드
        </a>

        <a
          href="https://github.com/whiteblackparang"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
