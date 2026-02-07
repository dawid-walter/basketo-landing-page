import { useState } from 'react';

type FAQItemType = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItemType[] = [
    {
      question: "Do I need a developer to use Basketo?",
      answer: "No, but basic HTML knowledge helps. Our integration is as simple as copy-pasting a code snippet. If you can add Google Analytics to your site, you can add Basketo. We also provide detailed documentation and video tutorials to guide you through the setup process.",
    },
    {
      question: "What payment methods are supported?",
      answer: "We currently support Stripe and Przelewy24 (popular in Poland). More payment gateways are coming soon, including PayPal, Square, and regional payment providers. All payments are processed securely with PCI DSS compliance.",
    },
    {
      question: "Is my customer data secure?",
      answer: "Absolutely. We're PCI DSS compliant and use end-to-end encryption for all sensitive data. Customer payment information never touches your server - it goes directly to our secure payment processors. We also perform regular security audits and maintain SOC 2 Type II certification.",
    },
    {
      question: "Can I customize the design of the cart?",
      answer: "Yes! You have full control over the styling. The widget can be customized with CSS to match your brand perfectly. You can modify colors, fonts, layout, and even add your own HTML structure. Our CSS API is well-documented with examples.",
    },
    {
      question: "How does AI integration work?",
      answer: "Basketo provides a RESTful API that makes it easy to integrate with chatbots and AI agents. Your AI assistant can add products to cart, retrieve order status, process checkouts, and more - all through simple API calls. We have examples for popular AI frameworks like LangChain and OpenAI Assistants.",
    },
    {
      question: "What happens if I exceed my plan's order limit?",
      answer: "You'll receive an email notification when you reach 80% of your limit. If you exceed it, your service won't be interrupted - we'll simply upgrade you to the next tier automatically. You can also set up usage alerts and manually upgrade at any time from the dashboard.",
    },
    {
      question: "Can I migrate from Shopify or WooCommerce?",
      answer: "Yes! We provide migration tools and support to help you transition from other platforms. You can export your product catalog, customer data, and order history. Our team can assist with the migration process, especially for Pro and Enterprise customers.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes. We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied for any reason within the first 30 days, we'll give you a full refund - no questions asked. Free tier users can upgrade and downgrade at any time.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Basketo
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border-2 border-transparent hover:border-blue-100 transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@basketo.com"
              className="bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
            <a
              href="#"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-lg border-2 border-gray-300 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
