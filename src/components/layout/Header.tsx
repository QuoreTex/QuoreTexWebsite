import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import image from "../../images/logobg.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Once mounted on client, we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 header bg-[#ffffff]/95 backdrop-blur-md",
    scrolled ? "shadow-lg py-2" : "py-4"
  );

  if (!mounted) {
    return null;
  }

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={image} className="h-16 w-16 text-primary"/>
            <span className="font-bold text-xl md:text-2xl">
  <span className="text-[#168AAD]">Quore</span>
  <span className="text-[#1E3A8A]">Tex</span>
</span>


          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 ">
            <ul className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#184E77] hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              variant="default"
              size="sm"
              className="rounded-full px-6"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="block text-lg py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full rounded-full"
                    asChild
                  >
                    <Link to="/contact" onClick={closeMenu}>
                      Get Started
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;