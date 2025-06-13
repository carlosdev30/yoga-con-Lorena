import React, { useState, useEffect } from "react";
import { Menu, X, Twitter, Facebook, Youtube, Instagram } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: Twitter, href: "#", platform: "Twitter" },
    { icon: Facebook, href: "#", platform: "Facebook" },
    { icon: Youtube, href: "#", platform: "YouTube" },
    { icon: Instagram, href: "#", platform: "Instagram" },
  ];

  const navItems = [
    { label: "Sobre mí", href: "#about" },
    { label: "Clases de yoga", href: "#services" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-condensed font-bold text-yoga-dark">
            Yoga con Lorena
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-yoga-dark hover:text-yoga-primary transition-colors duration-200 font-condensed py-2 px-4"
              >
                {item.label}
              </a>
            ))}

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 ml-6 border-l border-yoga-border pl-6">
              {socialLinks.map(({ icon: Icon, href, platform }) => (
                <a
                  key={platform}
                  href={href}
                  className="text-yoga-dark hover:text-yoga-primary transition-colors duration-200"
                  aria-label={platform}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-yoga-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-yoga-border">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-yoga-dark hover:text-yoga-primary transition-colors duration-200 font-condensed py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Social Media Icons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-yoga-border">
                {socialLinks.map(({ icon: Icon, href, platform }) => (
                  <a
                    key={platform}
                    href={href}
                    className="text-yoga-dark hover:text-yoga-primary transition-colors duration-200"
                    aria-label={platform}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
