import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-paper text-ink pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone/50">
          
          {/* Brand/Vision Column */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#top" className="font-display text-lg font-medium tracking-tight">
              Sharath Chandra <span className="font-serif italic font-normal">Kancherla</span>
            </a>
            <p className="text-xs leading-relaxed text-ink/80 max-w-sm font-light">
              To inspire and uplift one billion lives through healing, wisdom, music, and conscious living — nurturing a world that lives as one global family.
            </p>
            <div className="flex items-center gap-1.5 mt-2 bg-stone-light px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-ink/80">
              <span>My Inspiration:</span>
              <a
                href="https://gurudev.artofliving.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink hover:text-clay hover:underline decoration-clay transition-colors"
              >
                Gurudev Sri Sri Ravi Shankar
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#top" className="text-xs text-ink/80 hover:text-clay transition-colors font-light">
                Return to Top
              </a>
              <a href="#about" className="text-xs text-ink/80 hover:text-clay transition-colors font-light">
                Biography
              </a>
              <a href="#sessions" className="text-xs text-ink/80 hover:text-clay transition-colors font-light">
                Session Offerings
              </a>
              <a href="#contact" className="text-xs text-ink/80 hover:text-clay transition-colors font-light">
                Get in Touch
              </a>
            </nav>
          </div>

          {/* Contact & Socials Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink">
              Connect
            </h4>
            <div className="flex flex-col gap-1">
              <a
                href="mailto:sharathchandra.kancherla@gmail.com"
                className="text-xs text-ink/80 hover:text-clay transition-colors font-mono"
              >
                sharathchandra.kancherla@gmail.com
              </a>
              <a
                href="tel:+919700477529"
                className="text-xs text-ink/80 hover:text-clay transition-colors font-mono"
              >
                +91 9700477529
              </a>
            </div>
            
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/sharathkancherla?igsh=MWtvZXI1a3czbzdlYg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ink/75 hover:text-clay transition-colors duration-200"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="https://youtube.com/@sharathkancherla?si=d8kXq71Z1eJ0e18K"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="text-ink/75 hover:text-clay transition-colors duration-200"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/sharath-chandra-kancherla-b38422108?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink/75 hover:text-clay transition-colors duration-200"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[10px] font-mono tracking-wider text-ink/70 uppercase">
          <span>&copy; {new Date().getFullYear()} Sharath Chandra Kancherla</span>
          <span>Nurturing a world that lives as one global family</span>
        </div>
      </Container>
    </footer>
  );
}
