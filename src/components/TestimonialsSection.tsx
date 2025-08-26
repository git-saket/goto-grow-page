import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Go To Marketers transformed our social media presence completely. Our engagement increased by 500% in just 3 months. Their creative approach and strategic thinking are unmatched.",
      name: "Sarah Chen",
      company: "Bloom Beauty Co.",
      rating: 5,
    },
    {
      quote: "Working with this team was a game-changer for our startup. They helped us go from 0 to 10K monthly users with their performance ads and content strategy. Absolutely recommended!",
      name: "Marcus Rodriguez",
      company: "TechFlow App",
      rating: 5,
    },
    {
      quote: "The ROI we've seen from our campaigns has been incredible. These guys don't just create pretty designs – they create results. Our sales have tripled since we started working together.",
      name: "Emma Johnson",
      company: "Sustainable Home",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Don't Just Take Our{' '}
            <span className="text-primary">Word for It</span>
          </h2>
          <p className="font-body text-xl text-foreground-light max-w-2xl mx-auto">
            Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center shadow-card border-0">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
            </div>

            <blockquote className="font-body text-xl md:text-2xl text-foreground-light italic leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="text-center">
              <div className="font-heading font-bold text-lg text-foreground">
                {testimonials[currentIndex].name}
              </div>
              <div className="font-body text-primary">
                {testimonials[currentIndex].company}
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-background shadow-card hover:shadow-card-hover rounded-full transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-background shadow-card hover:shadow-card-hover rounded-full transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;