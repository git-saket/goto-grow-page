import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const openWhatsApp = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = '9993919953'; // Replace with real number
    const message = 'Hi Go To Marketers, I want help with...';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBackground} alt="Marketing Agency Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/60 to-primary/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 animate-fade-in">
          Grow with 
          {' '}
          <span className="text-primary-glow">Go To Marketers.</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          We’re not an agency—we’re your extended growth team. From marketing to automation, we partner with you to drive impact and scale your startup across every domain.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-white border-2 border-white text-black font-heading font-semibold text-lg px-8 py-4 shadow-button hover:scale-105 hover:text-white transition-all duration-300">
            Book a Free Strategy Call
          </Button>
          
          <Button onClick={openWhatsApp} variant="outline" size="lg" className="border-2 border-white font-heading font-semibold text-lg px-8 py-4 transition-all duration-300 hover:scale-105 ">
            Chat with Us on WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;