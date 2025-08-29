import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    label: 'Home',
    id: 'hero'
  }, {
    label: 'Services',
    id: 'services'
  }, {
    label: 'Portfolio',
    id: 'portfolio'
  }, {
    label: 'Testimonials',
    id: 'testimonials'
  }, {
    label: 'Our Story',
    id: 'our-story'
  }, {
    label: 'Contact',
    id: 'contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src={logo} 
              alt="Go To Marketers" 
              className={`h-10 w-10 mr-3 ${
                isScrolled ? 'filter-none' : 'filter '
              }`} 
            />
            <span className={`font-heading font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white drop-shadow-sm'
            }`}>
              Go To Marketers
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`font-body font-medium transition-colors duration-200 mx-[9px] ${
              isScrolled ? 'text-foreground-light hover:text-primary' : 'text-white/90 hover:text-white drop-shadow-sm'
            }`}>
                {item.label}
              </button>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-lg hover:shadow-button transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} ${
                isScrolled ? 'bg-foreground' : 'bg-white drop-shadow-sm'
              }`} />
              <div className={`h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''} ${
                isScrolled ? 'bg-foreground' : 'bg-white drop-shadow-sm'
              }`} />
              <div className={`h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} ${
                isScrolled ? 'bg-foreground' : 'bg-white drop-shadow-sm'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 p-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left py-3 font-body font-medium text-foreground-light hover:text-primary transition-colors">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection('contact')} className="w-full mt-4 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold">
              Get Started
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;