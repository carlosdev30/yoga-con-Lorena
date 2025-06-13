import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Natalia",
      text: "Nunca había practicado yoga y las clases de Blanca me parecieron muy accesibles. Su forma de explicar es muy clara y me siento cómoda desde el primer día.",
      role: "Estudiante principiante",
    },
    {
      name: "María José",
      text: "Después de años con dolor de espalda, las clases personalizadas han sido un antes y un después. Blanca adapta cada sesión a mis necesidades específicas.",
      role: "Clases particulares",
    },
    {
      name: "Carlos",
      text: "El taller de yoga en nuestra empresa ha mejorado notablemente el ambiente laboral. Los empleados están más relajados y productivos.",
      role: "Director de RRHH",
    },
    {
      name: "Ana",
      text: "Lo que más me gusta de las clases de Blanca es que no hay presión ni competitividad. Es yoga real, sin postureos, enfocado en el bienestar.",
      role: "Yoga en casa",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yoga-background to-white relative overflow-hidden">
      {/* Background Chakra Pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-96 h-96">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" stroke="#a466e2" strokeWidth="2" />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#a466e2"
              strokeWidth="1.5"
            />
            <circle cx="100" cy="100" r="40" stroke="#a466e2" strokeWidth="1" />
            <circle
              cx="100"
              cy="100"
              r="20"
              stroke="#a466e2"
              strokeWidth="0.5"
            />
            {Array.from({ length: 8 }).map((_, i) => (
              <path
                key={i}
                d={`M 100 100 L ${100 + 60 * Math.cos((i * Math.PI) / 4)} ${
                  100 + 60 * Math.sin((i * Math.PI) / 4)
                }`}
                stroke="#a466e2"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-condensed font-bold text-yoga-dark mb-4">
            Lo que dicen mis estudiantes
          </h2>
          <div className="w-24 h-1 bg-yoga-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center min-h-[300px] flex flex-col justify-center">
              <Quote size={48} className="text-yoga-primary/20 mx-auto mb-6" />

              <p className="text-lg md:text-xl text-yoga-dark/80 font-body leading-relaxed mb-8 max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div>
                <h4 className="text-xl font-condensed font-bold text-yoga-dark mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-yoga-primary font-body">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-yoga-dark rounded-full p-3 shadow-lg transition-all duration-200 md:left-[-60px]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-yoga-dark rounded-full p-3 shadow-lg transition-all duration-200 md:right-[-60px]"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? "bg-yoga-primary"
                    : "bg-yoga-dark/30 hover:bg-yoga-dark/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
