import About from "@/components/About";
import Contact from "@/components/Contact";
import EducationAndCerts from "@/components/EducationAndCerts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import SkipToContent from "@/components/SkipToContent";
import Skills from "@/components/Skills";
import Volunteering from "@/components/Volunteering";

export default function Home() {
  return (
    <>
      <SkipToContent />
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
