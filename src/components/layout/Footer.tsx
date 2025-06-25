import { Link } from "react-router-dom";
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
    <footer className="bg-muted/30 pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:items-start mb-12">
          {/* Left: Company Info */}
          <div className="w-full lg:w-[30%] space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src={image}
                  className="h-16 w-16"
                  alt="QuoreTex Logo"
                />
                <span className="font-bold text-xl text-foreground whitespace-nowrap">
                  QuoreTex Technologies Pvt. Ltd.
                </span>
              </div>
              <div className="mt-2 text-[#1F2E6B] text-sm font-semibold tracking-wide uppercase">
                INNOVATE | CONNECT | SCALE
              </div>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Innovating code. Empowering business through custom software solutions.
            </p>
            <div className="flex space-x-4">
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
          <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold mb-2 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Portfolio", "Tech Stack", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-muted-foreground hover:text-primary font-medium transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold mb-2 text-white">Services</h4>
              <ul className="space-y-2">
                {[
                  "Custom Software Development",
                  "Web Application Development",
                  "Mobile App Development",
                  "Cloud Solutions",
                  "Maintenance & Support",
                  "RAD Development",
                  "AI Solutions",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold mb-2 text-white">Contact Us</h4>
              <ul className="space-y-3">
                {Object.values(COMPANY_INFO.addresses).map((addr, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-muted-foreground">
                      <div className="font-medium">{addr.label}</div>
                      <div className="whitespace-pre-line">{addr.address}</div>
                    </div>
                  </li>
                ))}
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} QuoreTex Technologies Pvt. Ltd.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
