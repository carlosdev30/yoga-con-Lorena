import React from "react";
import { Home, Building, Users, User } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Yoga en tu casa",
      description:
        'Porque no hay espacio "más místico ni purificador" que la comodidad de tu propia casa. Clases personalizadas en tu hogar.',
    },
    {
      icon: Building,
      title: "Yoga en empresas",
      description:
        'Porque un "saludo al sol" no terminará el informe, pero aliviar tu dolor de cuello, sí. Bienestar laboral a través del yoga.',
    },
    {
      icon: Users,
      title: "Talleres de yoga",
      description:
        '¿Ponerte a practicar Yoga tú sola te da más pereza que hacer el último "challenge" viral? Los talleres grupales son para ti.',
    },
    {
      icon: User,
      title: "Clases de yoga para particulares",
      description:
        "Si no te gusta mucho practicar Yoga Online o prefieres clases presenciales, estas sesiones individuales son perfectas.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-condensed font-bold text-yoga-dark mb-4">
            Servicios
          </h2>
          <div className="w-24 h-1 bg-yoga-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-yoga-border hover:border-yoga-primary/20"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yoga-primary/10 rounded-full mb-6 group-hover:bg-yoga-primary/20 transition-colors duration-300">
                <service.icon
                  size={32}
                  className="text-yoga-primary group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-condensed font-bold text-yoga-dark mb-4 group-hover:text-yoga-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-yoga-dark/70 font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-yoga-dark/80 font-body mb-6">
            ¿Tienes dudas sobre qué servicio es mejor para ti?
          </p>
          <a
            href="#contact"
            className="inline-block bg-yoga-primary hover:bg-yoga-secondary text-white px-8 py-3 rounded-md font-condensed text-lg transition-colors duration-200"
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
