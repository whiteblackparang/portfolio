import { contactLinks } from "@/data/about";

export default function Contact() {
  return (
    <section id="contact" className="flex w-full max-w-5xl flex-col items-center">
      <h2 className="mb-3 text-2xl font-bold text-black dark:text-zinc-50">
        연락처
      </h2>

      <p className="mb-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        궁금한 점이 있으시면 언제든 편하게 연락 주세요.
      </p>

      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.slice(0, 3).map((c) => (
            <a
              key={c.label}
              href={c.url}
              target={c.icon === "email" ? undefined : "_blank"}
              rel={c.icon === "email" ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 rounded-xl border border-black/[.08] bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.1] dark:bg-zinc-950 dark:text-zinc-50"
            >
              {c.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.slice(3).map((c) => (
            <a
              key={c.label}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-black/[.08] bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-white/[.1] dark:bg-zinc-950 dark:text-zinc-50"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}