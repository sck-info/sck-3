import NamasteIntro from "@/components/NamasteIntro";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sessions from "@/components/Sessions";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <NamasteIntro />
      <Header />
      
      <main>
        <Hero />
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Sessions />
        </ScrollReveal>
        
        <ScrollReveal>
          <Metrics />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
}
