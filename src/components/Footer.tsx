import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import HangingLotus from "@/components/ui/HangingLotus";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-stone bg-paper text-ink pt-20 pb-12 relative overflow-hidden">
      <HangingLotus align="left" />
      <HangingLotus align="right" />
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.25em] font-bold text-moss uppercase bg-stone-light/60 px-4 py-1.5 border border-stone inline-flex items-center gap-2">
            SAMVADA &bull; CONNECT WITH US
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink">
            Begin Your <span className="font-serif italic font-normal text-clay">Healing Journey</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-ink-soft leading-relaxed font-light">
            Questions before you register? Reach out directly and I&apos;ll help you figure out which session fits what you&apos;re looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone/50 items-start">
          
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#top" className="font-display text-2xl font-medium tracking-tight text-ink">
              Sharath Chandra <span className="font-serif italic font-normal text-clay">Kancherla</span>
            </a>
            <p className="text-sm sm:text-base leading-relaxed text-ink-soft max-w-md font-light">
              To inspire and uplift one billion lives through healing, wisdom, music, and conscious living — nurturing a world that lives as one global family.
            </p>
            
            <div className="flex items-center gap-2 mt-2 bg-stone-light/80 px-3.5 py-2 border border-stone text-xs font-mono uppercase tracking-wider text-ink/80">
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

          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-ink">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2.5">
              <a href="#top" className="text-sm text-ink-soft hover:text-clay transition-colors font-light">
                Return to Top
              </a>
              <a href="#about" className="text-sm text-ink-soft hover:text-clay transition-colors font-light">
                Biography
              </a>
              <a href="#sessions" className="text-sm text-ink-soft hover:text-clay transition-colors font-light">
                Session Offerings
              </a>
              <a href="#moments" className="text-sm text-ink-soft hover:text-clay transition-colors font-light">
                Visual Highlights
              </a>
              <a href="#contact" className="text-sm text-ink-soft hover:text-clay transition-colors font-light">
                Get in Touch
              </a>
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-ink">
              Direct Contact
            </h3>
            
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:sharathchandra.kancherla@gmail.com"
                className="flex items-center gap-3 text-sm text-ink-soft hover:text-clay transition-colors font-mono group"
              >
                <div className="p-2 border border-stone bg-paper text-clay shrink-0 group-hover:border-clay transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>sharathchandra.kancherla@gmail.com</span>
              </a>

              <a
                href="tel:+919700477529"
                className="flex items-center gap-3 text-sm text-ink-soft hover:text-clay transition-colors font-mono group"
              >
                <div className="p-2 border border-stone bg-paper text-clay shrink-0 group-hover:border-clay transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 9700477529</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-ink-soft font-mono">
                <div className="p-2 border border-stone bg-paper text-clay shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-soft">Follow:</span>
              <a
                href="https://www.instagram.com/sharathkancherla?igsh=MWtvZXI1a3czbzdlYg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ink/75 hover:text-clay transition-colors duration-200"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://youtube.com/@sharathkancherla?si=d8kXq71Z1eJ0e18K"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="text-ink/75 hover:text-clay transition-colors duration-200"
              >
                <FaYoutube className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/sharath-chandra-kancherla-b38422108?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink/75 hover:text-clay transition-colors duration-200"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono tracking-wider text-ink/70 uppercase">
          <span>&copy; {new Date().getFullYear()} Sharath Chandra Kancherla</span>
          <span>Nurturing a world that lives as one global family</span>
        </div>
      </Container>
    </footer>
  );
}
