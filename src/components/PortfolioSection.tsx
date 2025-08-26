import { Card } from '@/components/ui/card';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      image: portfolio1,
      title: 'E-commerce Growth',
      description: 'Helped an online store increase sales by 400% through strategic ads and social media campaigns.',
      category: 'E-commerce',
    },
    {
      image: portfolio2,
      title: 'Social Media Domination',
      description: 'Built a beauty brand from 0 to 100K followers with engaging content and influencer partnerships.',
      category: 'Social Media',
    },
    {
      image: portfolio3,
      title: 'App Launch Success',
      description: 'Launched a fintech app that gained 50K users in the first month through targeted marketing.',
      category: 'App Launch',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Results That{' '}
            <span className="text-primary">Speak Volumes</span>
          </h2>
          <p className="font-body text-xl text-foreground-light max-w-2xl mx-auto">
            Don't just take our word for it. See how we've helped brands like yours achieve remarkable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-heading font-semibold">View Case Study</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-foreground-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-foreground-light mb-6">
            Want to see more success stories? Let's create yours next.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-heading font-semibold text-primary hover:text-primary-glow transition-colors duration-200 underline decoration-2 underline-offset-4"
          >
            Start Your Success Story →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;