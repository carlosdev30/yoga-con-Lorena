import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submission:", formData);
    // Reset form
    setFormData({
      name: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-condensed font-bold text-yoga-dark mb-4">
              ¿Hablamos?
            </h2>
            <div className="w-24 h-1 bg-yoga-primary mx-auto mb-6"></div>
            <p className="text-lg text-yoga-dark/80 font-body max-w-2xl mx-auto">
              Cuéntame qué necesitas y encontraremos la mejor forma de que el
              yoga forme parte de tu vida de manera natural y sin
              complicaciones.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 border-yoga-dark/20 focus:border-yoga-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Apellidos"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="h-12 border-yoga-dark/20 focus:border-yoga-primary"
                  required
                />
              </div>
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="h-12 border-yoga-dark/20 focus:border-yoga-primary"
                required
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Comentarios"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="border-yoga-dark/20 focus:border-yoga-primary resize-none"
                required
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-yoga-primary hover:bg-yoga-secondary text-white px-12 py-3 font-condensed text-lg transition-colors duration-200"
              >
                Enviar
              </Button>
            </div>
          </form>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <p className="text-yoga-dark/60 font-body mb-4">
              También puedes escribirme directamente a:
            </p>
            <a
              href="mailto:hola@yogaconblanca.com"
              className="text-yoga-primary hover:text-yoga-secondary font-condensed text-lg transition-colors duration-200"
            >
              hola@yogaconblanca.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
