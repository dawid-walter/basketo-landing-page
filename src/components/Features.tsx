export default function Features() {
  const features = [
    {
      title: "Lightweight Plugin",
      description: "Less than 50kb gzipped. Lightning-fast load times won't slow down your site.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Secure Checkout",
      description: "PCI DSS compliant. End-to-end encryption. Your customers' data is always protected.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Multiple Payment Gateways",
      description: "Stripe, Przelewy24 built-in. More payment providers coming soon.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: "Automatic Email Notifications",
      description: "Order confirmations, shipping updates, and customer receipts sent automatically.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Admin Dashboard Included",
      description: "Full-featured dashboard to manage products, orders, and customers. No extra cost.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Mobile-Optimized",
      description: "Responsive design that works perfectly on all devices. No extra configuration needed.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "AI-Ready API",
      description: "RESTful API perfect for chatbot integration. Let AI handle customer orders seamlessly.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Real-Time Inventory",
      description: "Automatic stock tracking and low inventory alerts. Never oversell again.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/bg-pattern-circuit.png)', backgroundRepeat: 'repeat', backgroundSize: '800px' }}></div>
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-cyan/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark-text-bright mb-4">
            Everything You Need to{" "}
            <span className="text-electric-cyan">
              Sell Online
            </span>
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Powerful features that don't require a developer to set up
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-bg-card rounded-xl p-6 border border-dark-bg-tertiary hover:border-electric-cyan/50 shadow-lg hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-electric-cyan/10 to-electric-green/10 w-16 h-16 rounded-lg flex items-center justify-center text-electric-cyan group-hover:text-electric-green mb-4 transition-all duration-300 group-hover:shadow-glow-cyan-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-text-bright mb-3 group-hover:text-electric-cyan transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-dark-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
