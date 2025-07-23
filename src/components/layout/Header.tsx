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
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
<img
  src={image}
  alt="QuoreTex Logo"
  className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain text-primary"
/>

            <span className="flex flex-col items-start ml-2 sm:ml-3">
              <span
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-0 text-blue-900 drop-shadow-lg min-w-0 max-w-[160px] xs:max-w-[200px] sm:max-w-[250px] md:max-w-[350px] truncate"
                style={{ display: 'inline-block', lineHeight: 1.1 }}
              >
                <span className="text-[#168AAD]">Quore</span>
                <span className="text-[#1E3A8A]">Tex</span>
              </span>
              <span
                className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wide mt-0.5 sm:mt-1 min-w-0 max-w-[120px] xs:max-w-[150px] md:max-w-none whitespace-nowrap text-ellipsis overflow-hidden ml-0.5 xs:ml-1 sm:ml-1 md:ml-3"
                style={{ color: '#1F2E6B', display: 'inline-block', lineHeight: 1 }}
              >
                Innovate. Connect. Scale.
              </span>
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
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent border-none shadow-none flex items-center justify-center"
              type="button"
            >
              {isOpen ? (
                <X className="h-8 w-8 text-blue-900" />
              ) : (
                <Menu className="h-8 w-8 text-blue-900" />
              )}
            </button>
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
            className="md:hidden bg-white text-blue-900 shadow-lg backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-6">
              <ul className="flex flex-col space-y-4">
                <AnimatePresence>
                  {NAV_LINKS.map((link, idx) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ delay: 0.08 * idx, type: 'spring', stiffness: 300 }}
                    >
                      <Link
                        to={link.path}
                        className="block text-lg py-2 text-blue-900 hover:text-blue-600 transition-colors duration-200 font-semibold tracking-wide"
                        onClick={() => {
                          closeMenu();
                          if (link.path === "/") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                      >
                        <motion.span
                          whileHover={{ scale: 1.08, color: '#168AAD' }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          {link.name}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </AnimatePresence>
                <li className="pt-2">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full rounded-full bg-blue-900 text-white hover:bg-blue-800"
                    asChild
                  >
                    <Link to="/contact" onClick={closeMenu}>
                      <motion.span
                        whileHover={{ scale: 1.05, backgroundColor: '#168AAD' }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        Get Started
                      </motion.span>
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