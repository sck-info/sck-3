import NamasteIntro from "@/components/NamasteIntro";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Sessions from "@/components/Sessions";
import SomaticPathwayFinder from "@/components/SomaticPathwayFinder";
import MindfulFocusTrainer from "@/components/MindfulFocusTrainer";
import Testimonials from "@/components/Testimonials";
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
          <Metrics />
        </ScrollReveal>
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        {false && (
          <ScrollReveal>
            <SomaticPathwayFinder />
          </ScrollReveal>
        )}
        
        <ScrollReveal>
          <MindfulFocusTrainer />
        </ScrollReveal>
        
        <ScrollReveal>
          <Sessions />
        </ScrollReveal>
        
        <ScrollReveal>
          <Testimonials />
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
