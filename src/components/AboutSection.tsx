const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-8">
            We're Not Your Average{' '}
            <span className="text-primary">Marketing Agency</span>
          </h2>
          
          <div className="space-y-6 font-body text-lg text-foreground-light leading-relaxed">
            <p>
              At Go To Marketers, we believe in <strong className="text-foreground">fearless creativity</strong> and 
              <strong className="text-foreground"> bold strategies</strong> that actually move the needle. 
              We're not here to play it safe – we're here to help you grow.
            </p>
            
            <p>
              Our young, dynamic team lives and breathes digital marketing. We work with startups who need to make 
              their mark, small businesses ready to scale, D2C brands looking to dominate their space, and 
              influencers who want to turn their passion into profit.
            </p>
            
            <p>
              <strong className="text-primary">The result?</strong> Campaigns that don't just look good – they perform. 
              Content that doesn't just get seen – it gets remembered. Strategies that don't just follow trends – they set them.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">50+</div>
              <div className="font-body text-foreground-light">Brands Grown</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">2M+</div>
              <div className="font-body text-foreground-light">Reach Generated</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">300%</div>
              <div className="font-body text-foreground-light">Avg ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">24/7</div>
              <div className="font-body text-foreground-light">Creative Energy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;