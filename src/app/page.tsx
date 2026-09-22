import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Featured from "@/components/sections/Featured";
import Projects from "@/components/sections/Projects";
import SideProjects from "@/components/sections/SideProjects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center gap-24 px-6 py-32">
        <Hero />
        <About />
        <Experience />
        <Featured />
        <Projects />
        <SideProjects />
        <Skills />
        <Education />
      </main>
    </div>
  );
}