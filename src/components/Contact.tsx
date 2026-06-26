import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import HangingLotus from "@/components/ui/HangingLotus";

const contactItems = [
  {
    icon: Mail,
    label: "sharathchandra.kancherla@gmail.com",
    href: "mailto:sharathchandra.kancherla@gmail.com",
  },
  { icon: Phone, label: "+91 9700477529", href: "tel:+919700477529" },
  { icon: MapPin, label: "Hyderabad, Telangana, India", href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-stone py-20 sm:py-28 bg-paper relative overflow-hidden">
      {/* Hanging Lotus Corners */}
      <HangingLotus align="left" />
      <HangingLotus align="right" />
      
      {/* Decorative Traditional Border Accents */}
      <div className="absolute left-[5%] bottom-0 h-10 w-[1px] bg-clay/35" />
      <div className="absolute right-[5%] bottom-0 h-10 w-[1px] bg-clay/35" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-clay bg-stone/40 px-3.5 py-1.5 border border-stone">
              Connect With Us
            </span>
            <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Questions before you <span className="font-serif italic font-normal text-clay">register</span>?
            </h2>
            <p className="mt-4 max-w-prose text-xs sm:text-sm leading-relaxed text-ink-soft font-light">
              Reach out directly and I&apos;ll help you understand which therapy, planetary chart reading, or holistic coaching workshop align best with your path.
            </p>
          </div>

          <div className="lg:col-span-6 border border-clay/50 p-8 bg-stone-light/30 flex flex-col gap-6 relative">
            {/* Elegant corner details */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-clay" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-clay" />
            
            <h3 className="font-display text-xl font-medium text-ink">
              Get in <span className="font-serif italic font-normal text-clay">Touch</span>
            </h3>
            
            <ul className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3.5 border-b border-stone/50 pb-3 last:border-b-0 last:pb-0">
                  <div className="p-2 border border-stone bg-paper text-clay shrink-0">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-xs font-poppins tracking-tight text-ink hover:text-clay hover:underline transition-all font-light"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-xs font-poppins tracking-tight text-ink-soft font-light">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
