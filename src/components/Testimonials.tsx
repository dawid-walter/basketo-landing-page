export default function Testimonials() {
  const testimonials = [
    {
      quote: "Basketo transformed our static website into a full e-commerce store in less than an hour. The AI integration was seamless, and our chatbot can now process orders automatically.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      // TODO: Add avatar image
      // Image prompt in IMAGE_PROMPTS.md: Professional headshot avatar
    },
    {
      quote: "As a non-technical founder, I was worried about implementing e-commerce. Basketo made it incredibly simple. Just copy-paste the code and you're done. The admin panel is intuitive and powerful.",
      author: "Marcus Rodriguez",
      role: "Founder, Artisan Marketplace",
    },
    {
      quote: "The best part? Our customers love it. The checkout flow is smooth, mobile-optimized, and the order tracking keeps them informed. Our cart abandonment rate dropped by 35%.",
      author: "Emily Watson",
      role: "E-commerce Manager, FashionHub",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-electric-cyan/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            <span className="text-dark-text-bright">Loved by </span>
            <span className="text-electric-cyan">
              Developers
            </span>
            <span className="text-dark-text-bright"> and Business Owners</span>
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Join thousands of businesses using Basketo to power their online stores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-bg-card rounded-xl p-8 border border-dark-bg-tertiary hover:border-electric-cyan/50 shadow-lg hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                {/* Star Rating */}
                <div className="flex text-electric-green">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-dark-text-primary leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                {/* Avatar placeholder - will be replaced with real image */}
                <div className="w-12 h-12 rounded-full bg-gradient-electric flex items-center justify-center text-dark-bg-primary font-bold text-lg mr-4 shadow-glow-cyan-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-dark-text-bright group-hover:text-electric-cyan transition-colors duration-300">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-dark-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-dark-text-secondary mb-6">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-dark-text-secondary">
            <div className="flex items-center gap-2 hover:text-electric-green transition-colors duration-300">
              <svg className="w-5 h-5 text-electric-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>10,000+ Active Stores</span>
            </div>
            <div className="flex items-center gap-2 hover:text-electric-green transition-colors duration-300">
              <svg className="w-5 h-5 text-electric-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>1M+ Transactions</span>
            </div>
            <div className="flex items-center gap-2 hover:text-electric-green transition-colors duration-300">
              <svg className="w-5 h-5 text-electric-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 hover:text-electric-green transition-colors duration-300">
              <svg className="w-5 h-5 text-electric-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>PCI DSS Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
