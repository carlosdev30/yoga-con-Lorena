import React, { useState } from "react";
import { Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Footer newsletter subscription:", email);
    setEmail("");
  };

  const socialLinks = [
    { icon: Twitter, href: "#", platform: "Twitter" },
    { icon: Facebook, href: "#", platform: "Facebook" },
    { icon: Youtube, href: "#", platform: "YouTube" },
    { icon: Instagram, href: "#", platform: "Instagram" },
  ];

  const recentArticles = [
    {
      title: "Retiro Re-Conecta",
      excerpt:
        "Asistir a un retiro es darte un tiempo para ti, desconectar de la rutina y reconectar contigo misma.",
      date: "6 mayo, 2024",
    },
    {
      title: "Retiro de Yoga y Meditación",
      excerpt:
        "Una experiencia única para profundizar en tu práctica y encontrar la calma interior que necesitas.",
      date: "12 julio, 2023",
    },
  ];

  return (
    <footer className="bg-yoga-dark text-yoga-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-condensed font-bold mb-6">
              Newsletter:
            </h3>
            <p className="text-yoga-light/80 font-body mb-6 leading-relaxed">
              Recibe consejos prácticos, reflexiones sobre yoga y las últimas
              novedades directamente en tu email. Sin spam, solo contenido que
              realmente te interesa.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-yoga-primary"
                required
              />
              <Button
                type="submit"
                className="h-12 px-6 bg-yoga-primary hover:bg-yoga-secondary text-white font-condensed transition-colors duration-200"
              >
                Suscribirse
              </Button>
            </form>
          </div>

          {/* Recent Articles Section */}
          <div>
            <h3 className="text-xl font-condensed font-bold mb-6">
              Últimos artículos:
            </h3>
            <div className="space-y-6">
              {recentArticles.map((article, index) => (
                <article
                  key={index}
                  className="border-b border-white/10 pb-6 last:border-b-0"
                >
                  <h4 className="font-condensed font-bold text-lg mb-2 hover:text-yoga-primary transition-colors duration-200 cursor-pointer">
                    {article.title}
                  </h4>
                  <p className="text-yoga-light/70 font-body text-sm leading-relaxed mb-2">
                    {article.excerpt}
                  </p>
                  <time className="text-yoga-light/50 font-body text-xs">
                    {article.date}
                  </time>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-2xl font-condensed font-bold">
              Yoga con Blanca
            </div>

            {/* Privacy Link */}
            <div>
              <a
                href="#privacy"
                className="text-yoga-light/70 hover:text-yoga-primary font-body text-sm transition-colors duration-200"
              >
                Política de privacidad
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, platform }) => (
                <a
                  key={platform}
                  href={href}
                  className="text-yoga-light/70 hover:text-yoga-primary transition-colors duration-200"
                  aria-label={platform}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-yoga-light/50 font-body text-sm">
              © {new Date().getFullYear()} Yoga con Blanca. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
