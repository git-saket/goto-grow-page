import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              Go To Marketers
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We’re not an agency—we’re your extended growth team. 
              From marketing to automation, we partner with you to 
              drive impact and scale your startup across every domain.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Social Media Marketing</li>
              <li>Automation</li>
              <li>Analytics</li>
              <li>Strategy</li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>About Us</li>
              <li>Success Stories</li>
              <li>Client Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 4 - Follow Us */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Follow Us</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Connect with us on social media for daily tips, insights, 
              and behind-the-scenes looks at our work.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/gotomarketers"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/go.to.marketer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="font-body text-white/60 text-sm">
            © {currentYear} Go To Marketers. All rights reserved. |{" "}
            <a href="#" className="hover:text-white transition">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
