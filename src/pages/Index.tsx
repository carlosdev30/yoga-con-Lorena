import React from "react";
import Header from "@/components/yoga/Header";
import HeroSection from "@/components/yoga/HeroSection";
import AboutSection from "@/components/yoga/AboutSection";
import ServicesSection from "@/components/yoga/ServicesSection";
import BlogSection from "@/components/yoga/BlogSection";
import TestimonialsSection from "@/components/yoga/TestimonialsSection";
import ContactSection from "@/components/yoga/ContactSection";
import Footer from "@/components/yoga/Footer";
import CookieNotice from "@/components/yoga/CookieNotice";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
};

export default Index;
