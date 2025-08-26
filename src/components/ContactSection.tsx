import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual integration
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        business: '',
        service: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '1234567890'; // Replace with real number
    const message = 'Hi Go To Marketers, I want help with...';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Let's Grow{' '}
            <span className="text-primary">Together</span>
          </h2>
          <p className="font-body text-xl text-foreground-light max-w-2xl mx-auto">
            Ready to take your brand to the next level? Let's start with a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-card border-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-body font-semibold text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="font-body font-semibold text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="business" className="font-body font-semibold text-foreground">
                    Business/Brand Name
                  </Label>
                  <Input
                    id="business"
                    value={formData.business}
                    onChange={(e) => handleInputChange('business', e.target.value)}
                    className="mt-2"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <Label className="font-body font-semibold text-foreground">
                    Service Interested In
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social-media">Social Media Marketing</SelectItem>
                      <SelectItem value="performance-ads">Performance Ads</SelectItem>
                      <SelectItem value="branding">Branding & Design</SelectItem>
                      <SelectItem value="content">Content Creation</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-body font-semibold text-foreground">
                    Tell us about your project
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 min-h-[120px]"
                    placeholder="What are your goals? What challenges are you facing? The more details, the better we can help!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-heading font-semibold text-lg py-6 shadow-button hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card border-0 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Quick Chat?
              </h3>
              <p className="font-body text-foreground-light mb-6">
                Get instant answers to your questions via WhatsApp.
              </p>
              <Button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
              >
                Chat on WhatsApp
              </Button>
            </Card>

            <Card className="p-6 shadow-card border-0">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                Other Ways to Reach Us
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span className="font-body text-foreground-light">hello@gotomarketers.com</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span className="font-body text-foreground-light">+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-body text-sm text-foreground-light">
                  <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;