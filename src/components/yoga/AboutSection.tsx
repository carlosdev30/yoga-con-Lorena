import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Placeholder images - in a real app these would be actual yoga photos
  const images = [
    { src: "/placeholder.svg", alt: "Blanca practicing yoga outdoors" },
    { src: "/placeholder.svg", alt: "Yoga class session" },
    { src: "/placeholder.svg", alt: "Meditation pose" },
    { src: "/placeholder.svg", alt: "Yoga teaching moment" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-yoga-background to-yoga-section"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover"
              />

              {/* Carousel Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-yoga-dark rounded-full p-2 shadow-lg transition-all duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-yoga-dark rounded-full p-2 shadow-lg transition-all duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImage
                      ? "bg-yoga-primary"
                      : "bg-yoga-dark/30 hover:bg-yoga-dark/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* About Content */}
          <div className="lg:pl-12">
            <h2 className="text-4xl md:text-5xl font-condensed font-bold text-yoga-dark mb-8">
              Blanca Jiménez
            </h2>

            <div className="space-y-6 text-yoga-dark/80 font-body text-lg leading-relaxed">
              <p>
                Hola, soy Blanca. Si me estás leyendo ahora es quizás porque
                quieres librarte de un dolor muscular, empezar a hacer
                ejercicio, practicar mindfulness, o simplemente porque tienes
                curiosidad sobre el yoga.
              </p>

              <p>
                Sea cual sea el motivo, te doy la bienvenida a mi página. Aquí
                encontrarás información sobre mis clases, talleres y servicios
                de yoga, así como artículos y consejos para tu práctica
                personal.
              </p>

              <p>
                Mi objetivo es acompañarte en tu camino hacia el bienestar
                físico y mental a través de una práctica de yoga accesible, sin
                postureos ni complicaciones innecesarias.
              </p>
            </div>

            <Button className="mt-8 bg-yoga-primary hover:bg-yoga-secondary text-white px-8 py-3 font-condensed text-lg transition-colors duration-200">
              Leer más sobre mí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
