import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      // Show notice after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-yoga-dark/95 backdrop-blur-sm text-yoga-light border-t border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-body text-sm leading-relaxed">
              Utilizamos cookies para asegurar que damos la mejor experiencia al
              usuario en nuestra web. Si continúas navegando, consideramos que
              aceptas su uso.{" "}
              <a
                href="#privacy"
                className="text-yoga-primary hover:text-yoga-secondary underline transition-colors duration-200"
              >
                Más información sobre cookies
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={handleAccept}
              className="bg-yoga-primary hover:bg-yoga-secondary text-white px-6 py-2 font-condensed transition-colors duration-200"
            >
              Vale
            </Button>

            <button
              onClick={handleClose}
              className="text-yoga-light/70 hover:text-yoga-light transition-colors duration-200"
              aria-label="Close cookie notice"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
