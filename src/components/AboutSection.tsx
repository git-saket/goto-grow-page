const AboutSection = () => {
  return <section id="our-story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-8">
            We're Not Your Average{' '}
            <span className="text-primary">Marketing Agency</span>
          </h2>
          
          <div className="space-y-6 font-body text-lg text-foreground-light leading-relaxed">
            <p>
              Every startup needs more than just an agency,
               they need people who care about their growth like their own.
            </p>
            
            <p>
              That’s what Go To Marketers is built for. We plug in as your <strong className="text-foreground"> extended team</strong>, 
              taking care of <strong className="text-foreground"> content, automation, analytics, and strategy </strong> so you can focus on building the future. 
              Think of us not as service providers, but as partners who share your vision and work with you to make it real.
            </p>
            
            <p>
              <strong className="text-primary">The result?</strong> Campaigns that don't just look good – they perform. 
              Content that doesn't just get seen – it gets remembered. Strategies that don't just follow trends – they set them.
            </p>
          </div>

          
        </div>
      </div>
    </section>;
};
export default AboutSection;