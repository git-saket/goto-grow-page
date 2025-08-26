import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <div className="fade-in-up">
          <AboutSection />
        </div>
        <div className="fade-in-up">
          <ServicesSection />
        </div>
        <div className="fade-in-up">
          <PortfolioSection />
        </div>
        <div className="fade-in-up">
          <TestimonialsSection />
        </div>
        <div className="fade-in-up">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;