import { Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center mb-6 md:mb-0">
            <img src={logo} alt="Go To Marketers" className="h-10 w-10 mr-3" />
            <span className="font-heading font-bold text-xl">
              Go To Marketers
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com/gotomarketers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/gotomarketers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-body text-white/60">
            © {currentYear} Go To Marketers. All rights reserved. Built with ❤️ for growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;