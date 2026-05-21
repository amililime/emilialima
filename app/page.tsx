import About from "@/components/About";
import Contact from "@/components/Contact";
import EducationAndCerts from "@/components/EducationAndCerts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Volunteering from "@/components/Volunteering";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="bg-ink text-paper sr-only px-4 py-2 text-sm focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Volunteering />
        <EducationAndCerts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
