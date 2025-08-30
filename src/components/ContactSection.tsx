import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const openWhatsApp = () => {
    const phoneNumber = '919993919953';
    const message = 'Hi Go To Marketers, I want help with...';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white mb-4 sm:mb-6">
            Let's Grow{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to take your brand to the next level? Let's start with a conversation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          {/* WhatsApp Card */}
          <div className="order-1 lg:order-1">
            <Card className="h-full p-8 shadow-xl border-0 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="bg-green-100 dark:bg-green-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                    Quick Chat?
                  </h3>
                  <p className="font-body text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
                    Get instant answers to your questions via WhatsApp. We're here to help you grow your business!
                  </p>
                </div>
                
                <div className="space-y-6">
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Chat on WhatsApp
                  </Button>
                  
                  {/* Features */}
                  <div className="pt-6 border-t border-green-200 dark:border-green-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Instant Response</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Free Consultation</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Personal Touch</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Quick Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Info Card */}
          <div className="order-2 lg:order-2">
            <Card className="h-full p-8 shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-8 text-center lg:text-left">
                    Other Ways to Reach Us
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white text-base mb-1">Email</p>
                        <a 
                          href="mailto:hello@gotomarketers.com"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base break-all"
                        >
                          info@gotomarketers.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white text-base mb-1">Phone</p>
                        <a 
                          href="tel:+15551234567"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
                        >
                          +91 9993919953
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white text-base mb-1">Business Hours</p>
                        <p className="text-gray-600 dark:text-gray-300 text-base">
                          Mon-Fri: 10:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-6">
                  {/* Response Time */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-blue-900 dark:text-blue-100 text-base mb-2">
                          Response Time
                        </p>
                        <p className="text-blue-700 dark:text-blue-300 text-base">
                          We typically respond within 1-2 hours during business hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div>
                    <h4 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-4 text-center lg:text-left">
                      Why Choose Us?
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Free consultation call",
                        "Customized solutions",
                        "Proven track record",
                        "24/7 support available"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl text-center max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Join us and let's make something amazing together
            </p>
            <Button
              onClick={openWhatsApp}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
