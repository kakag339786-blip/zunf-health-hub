import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-medical-blue-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-heading font-extrabold">ZUNF</span>
              <span className="text-sm font-heading font-semibold tracking-widest text-sage-green ml-1">Medicare</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Pakistan's trusted partner for preventive healthcare. Empowering schools, workplaces, and families with home diagnostics, consultancy, and patient care.
            </p>
            <p className="text-xs text-sage-green font-medium italic">Har Qadam Pe Aapkay Saath</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Our Labs", to: "/labs" },
                { label: "Services", to: "/services" },
                { label: "Health Packages", to: "/packages" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-primary-foreground/70 hover:text-sage-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                "At-Home Blood Tests",
                "Radiology",
                "Telemedicine",
                "Home Patient Care",
                "Aesthetics & Dentistry",
                "Nutrition Analysis",
                "Health Card",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-primary-foreground/70">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+923001234567" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-sage-green transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                +92 300 1234567
              </a>
              <a href="mailto:info@zunfmedicare.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-sage-green transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                info@zunfmedicare.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Lahore, Punjab, Pakistan
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-sage-green transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Zunf Medicare. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-sage-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-sage-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
