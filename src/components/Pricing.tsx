export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for testing and small projects",
      features: [
        "Up to 100 orders/month",
        "Basic cart functionality",
        "Email notifications",
        "Community support",
        "Admin dashboard",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Great for growing businesses",
      features: [
        "Up to 1,000 orders/month",
        "All cart features",
        "Priority email support",
        "Custom branding",
        "Advanced analytics",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Pro",
      price: "$99",
      period: "per month",
      description: "For high-volume sellers",
      features: [
        "Unlimited orders",
        "Everything in Starter",
        "24/7 priority support",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited everything",
        "White-label solution",
        "On-premise deployment",
        "Custom development",
        "Training & onboarding",
        "24/7 phone support",
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(/bg-pattern-circuit.png)', backgroundRepeat: 'repeat', backgroundSize: '900px' }}></div>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg-primary via-dark-bg-secondary to-dark-bg-primary"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-electric-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-electric-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark-text-bright mb-4">
            Simple,{" "}
            <span className="text-electric-cyan">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-dark-bg-card border-2 border-electric-cyan shadow-glow-cyan'
                  : 'bg-dark-bg-card border border-dark-bg-tertiary hover:border-electric-cyan/50'
              } transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-cyan relative group`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-electric text-dark-bg-primary px-4 py-1 rounded-full text-sm font-bold shadow-glow-cyan">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? 'text-electric-cyan' : 'text-dark-text-bright'
                  } group-hover:text-electric-cyan transition-colors duration-300`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? 'text-electric-cyan' : 'text-dark-text-bright'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm text-dark-text-secondary"
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className="text-sm text-dark-text-secondary"
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        plan.highlighted ? 'text-electric-cyan' : 'text-electric-green'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className="text-sm text-dark-text-primary"
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-electric hover:shadow-glow-cyan text-dark-bg-primary'
                    : 'bg-dark-bg-tertiary hover:bg-dark-bg-tertiary/50 text-electric-cyan border border-electric-cyan/50 hover:border-electric-cyan hover:shadow-glow-cyan-sm'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-text-secondary">
            All plans include 14-day free trial. No credit card required.{' '}
            <a href="#" className="text-electric-cyan hover:text-electric-green font-semibold transition-colors duration-300">
              Compare plans in detail
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
