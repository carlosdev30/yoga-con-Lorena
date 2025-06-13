import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yoga-section via-yoga-background to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>

      {/* Chakra Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 opacity-10">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full animate-float"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Chakra Symbol */}
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#a466e2"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#a466e2"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              stroke="#a466e2"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="20"
              stroke="#a466e2"
              strokeWidth="0.5"
              fill="none"
            />
            {/* Petals */}
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M 100 100 L ${100 + 60 * Math.cos((i * Math.PI) / 4)} ${
                  100 + 60 * Math.sin((i * Math.PI) / 4)
                }`}
                stroke="#a466e2"
                strokeWidth="0.5"
                opacity="0.6"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-condensed font-bold text-yoga-dark mb-4">
            Yoga con Blanca
          </h1>
          <div className="w-24 h-1 bg-yoga-primary mx-auto"></div>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-condensed font-light text-yoga-dark mb-6 leading-tight">
          Flexibilidad: Bienestar sin postureos
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-yoga-dark/80 mb-12 max-w-2xl mx-auto font-body">
          Conseguir muchos likes con una postura casi circense está bien... Pero
        </p>

        {/* Newsletter Signup */}
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 border-yoga-dark/20 focus:border-yoga-primary"
              required
            />
            <Button
              type="submit"
              className="h-12 px-8 bg-yoga-primary hover:bg-yoga-secondary text-white font-condensed text-lg transition-colors duration-200"
            >
              Suscribirse
            </Button>
          </div>
        </form>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-yoga-dark/60 text-sm font-condensed mb-2">
            Scroll
          </span>
          <ChevronDown
            size={24}
            className="text-yoga-primary animate-scroll-indicator"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
