import { Card } from '@/components/ui/card';
import { Megaphone, Target, Palette, PenTool } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all social platforms with engaging content and strategic campaigns.',
    },
    {
      icon: Target,
      title: 'Performance Ads',
      description: 'Data-driven advertising campaigns that deliver measurable results and maximize your ROI.',
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Create a bold visual identity that stands out and resonates with your target audience.',
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'High-quality content that tells your story and drives engagement across all channels.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            How We Help You{' '}
            <span className="text-primary">Grow</span>
          </h2>
          <p className="font-body text-xl text-foreground-light max-w-2xl mx-auto">
            Our comprehensive suite of services is designed to take your brand from where it is to where it needs to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center bg-card hover:bg-card-hover border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-xl mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="font-body text-foreground-light leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;