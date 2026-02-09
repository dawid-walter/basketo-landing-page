export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Products",
      description: "You build your product pages. Use any CMS, static site, or custom solution. You maintain full control.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Add Our Widget",
      description: "Drop in a simple JavaScript snippet. Configure in minutes with your API key. No backend changes needed.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Start Selling",
      description: "We handle the cart, secure checkout, payments, order management, and email notifications. You focus on your business.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/bg-pattern-circuit.png)', backgroundRepeat: 'repeat', backgroundSize: '750px' }}></div>
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark-text-bright mb-4">
            How It{" "}
            <span className="text-electric-cyan">
              Works
            </span>
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Get your e-commerce up and running in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-dark-bg-card rounded-2xl p-8 h-full border border-dark-bg-tertiary hover:border-electric-cyan/50 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-2">
                <div className="text-electric-cyan group-hover:text-electric-green transition-colors duration-300 mb-4">
                  {step.icon}
                </div>
                <div className="text-5xl font-bold text-electric-cyan mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-dark-text-bright mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-dark-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <svg className="w-12 h-12 text-electric-cyan/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
