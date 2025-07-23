import { Link, useNavigate, useLocation } from "react-router-dom";
import React from "react";
// Helper component for service links with hash scrolling
const ServiceLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pathname, hash] = to.split("#");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname !== pathname) {
      navigate(pathname + (hash ? `#${hash}` : ""));
      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else if (hash) {
      // Always scroll, even if hash is the same
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      // Force hash update to trigger scroll event
      if (window.location.hash !== `#${hash}`) {
        window.location.hash = `#${hash}`;
      } else {
        // If already at hash, force a re-scroll
        window.history.replaceState(null, "", pathname + `#${hash}`);
      }
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-muted-foreground hover:text-primary transition-colors"
      style={{ color: '#116d89' }}
    >
      {children}
    </a>
  );
};
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import image from "../../images/logobg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   <footer style={{ backgroundColor: "#E6F6FF" }} className="pt-8 pb-4 md:pt-10 md:pb-6">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:items-start mb-8 md:mb-12">
          {/* Left: Company Info */}
          <div className="w-full lg:w-[30%] space-y-3 md:space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src={image}
                  className="h-16 w-16 md:h-20 md:w-20"
                  alt="QuoreTex Logo"
                />
                <div className="flex flex-col items-start">
                  <span className="font-bold text-lg md:text-xl lg:text-2xl text-foreground whitespace-nowrap">
                    <span className="text-[#168AAD]">QuoreTex</span><span className="text-[#1E3A8A]">Technologies Pvt. Ltd.</span> 
                  </span>
                  <span className="text-[9px] md:text-xs font-semibold tracking-wide mt-1 min-w-[100px] md:min-w-[150px] max-w-none whitespace-nowrap" style={{ color: '#1F2E6B', display: 'inline-block' }}>
                  Innovate. Connect. Scale.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start pl-12 md:pl-20">
              <p className="text-muted-foreground max-w-xs text-xs md:text-base font-bold" style={{ color: '#116d89', textAlign: 'left' }}>
                Innovating code. Empowering business through custom software solutions.
              </p>
            </div>
            <div className="flex space-x-3 md:space-x-4 justify-start w-full pl-12 md:pl-20">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={COMPANY_INFO.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-white p-1">
                    <Linkedin className="h-5 w-5" color="#0077B5" />
                  </span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={COMPANY_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-white p-1">
                    <Instagram className="h-5 w-5" color="#E4405F" />
                  </span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Footer Links */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-6">
            {/* Quick Links */}
            <div className="flex flex-col gap-2 md:gap-4 pl-4 md:pl-24 items-start text-left">
              <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2" style={{ color: '#1E3A8A' }}>
                <span style={{ color: '#168AAD' }}>Quick</span> <span style={{ color: '#1E3A8A' }}>Links</span>
              </h4>
              <ul className="space-y-1 md:space-y-2 w-full">
                {[
                  { name: "Home", to: "/" },
                  { name: "About", to: "/about" },
                  { name: "Services", to: "/services" },
                  { name: "Portfolio", to: "/portfolio" },
                  { name: "Tech Stack", to: "/tech-stack" },
                  { name: "Contact", to: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className="text-muted-foreground hover:text-primary font-medium transition-colors"
                      style={{ color: '#116d89' }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-2 md:gap-4 pl-4 md:pl-0 items-start text-left">
              <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">
                <span style={{ color: '#168AAD' }}>Our </span><span style={{ color: '#1E3A8A' }}>Services</span>
              </h4>
              <ul className="space-y-1 md:space-y-2">
                {[
                  { name: "Custom Software Development", to: "/services#custom-software-development" },
                  { name: "Web Application Development", to: "/services#web-application-development" },
                  { name: "Mobile App Development", to: "/services#mobile-app-development" },
                  { name: "Cloud Solutions", to: "/services#cloud-solutions" },
                  { name: "Maintenance & Support", to: "/services#maintenance-support" },
                  { name: "RAD Development", to: "/services#rad-development" },
                  { name: "AI Solutions", to: "/services#ai-solutions" },
                ].map((service) => (
                  <li key={service.name}>
                    <ServiceLink to={service.to}>{service.name}</ServiceLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-2 md:gap-4 pl-4 md:pl-0 items-start text-left">
              <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2" style={{ color: '#1E3A8A' }}>
                <span style={{ color: '#168AAD' }}>Contact </span><span style={{ color: '#1E3A8A' }}>Us</span>
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {Object.values(COMPANY_INFO.addresses).map((addr, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#116d89' }} />
                    <div style={{ color: '#116d89' }}>
                      <div className="font-medium">{addr.label}</div>
                      <div className="whitespace-pre-line">{addr.address}</div>
                    </div>
                  </li>
                ))}
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 shrink-0" style={{ color: '#116d89' }} />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    style={{ color: '#116d89' }}
                  >
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 shrink-0" style={{ color: '#116d89' }} />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    style={{ color: '#116d89' }}
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="mb-4 md:mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-0 text-center">
            &copy; {currentYear} <span className="text-[#168AAD]">QuoreTex</span><span className="text-[#1E3A8A]">Technologies Pvt. Ltd.</span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6 items-center">
            <Link
              to="/privacy"
              className="text-xs md:text-sm hover:text-primary transition-colors"
              style={{ fontWeight: 600 }}
            >
              <span style={{ color: '#168AAD' }}>Privacy</span><span style={{ color: '#1E3A8A' }}> Policy</span>
            </Link>
            <span className="hidden sm:inline-block" style={{ color: '#1E3A8A' }}>|</span>
            <Link
              to="/terms"
              className="text-xs md:text-sm hover:text-primary transition-colors"
              style={{ fontWeight: 600 }}
            >
              <span style={{ color: '#168AAD' }}>Terms of</span><span style={{ color: '#1E3A8A' }}> Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
