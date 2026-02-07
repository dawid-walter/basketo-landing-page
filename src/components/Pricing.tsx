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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-primary text-white shadow-2xl scale-105 border-4 border-blue-400'
                  : 'bg-white shadow-lg hover:shadow-xl'
              } transition-all duration-300 hover:-translate-y-1 relative`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.highlighted ? 'text-blue-100' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-blue-200' : 'text-green-500'
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
                      className={`text-sm ${
                        plan.highlighted ? 'text-blue-50' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-blue-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include 14-day free trial. No credit card required.{' '}
            <a href="#" className="text-primary hover:underline font-semibold">
              Compare plans in detail
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
