import { useState } from 'react';

export default function Integration() {
  const [copied, setCopied] = useState(false);

  const codeExample = `<!-- Step 1: Add the script -->
<script src="https://cdn.basketo.com/widget.js"></script>

<!-- Step 2: Initialize cart -->
<div id="basketo-cart"></div>
<script>
  Basketo.init({
    apiKey: 'your-api-key',
    container: '#basketo-cart'
  });
</script>

<!-- Step 3: Add products -->
<button onclick="Basketo.addItem({
  productId: 'prod-123',
  name: 'Dragon Figurine',
  price: 149.99,
  currency: 'PLN'
})">Add to Cart</button>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="integration" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(/bg-pattern-grid.png)', backgroundRepeat: 'repeat', backgroundSize: '650px' }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark-text-bright mb-4">
            Integration in{" "}
            <span className="text-electric-cyan">
              Minutes
            </span>
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Copy, paste, and you're ready to accept orders
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-bg-primary rounded-xl overflow-hidden shadow-2xl border border-dark-bg-tertiary hover:border-electric-cyan/30 transition-all duration-300 group">
            <div className="flex items-center justify-between bg-dark-bg-card px-6 py-3 border-b border-dark-bg-tertiary">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-glow-cyan-sm"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-glow-cyan-sm"></div>
                <div className="w-3 h-3 rounded-full bg-electric-green shadow-glow-green-sm"></div>
              </div>
              <span className="text-dark-text-secondary text-sm font-mono">index.html</span>
              <button
                onClick={handleCopy}
                className="bg-gradient-electric hover:shadow-glow-cyan text-dark-bg-primary px-4 py-1 rounded text-sm font-semibold transition-all duration-300"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-electric-green">{codeExample}</code>
              </pre>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-dark-bg-card rounded-lg p-6 border border-dark-bg-tertiary hover:border-electric-cyan/50 transition-all duration-300 hover:shadow-glow-cyan-sm group">
              <div className="bg-gradient-electric text-dark-bg-primary w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-glow-cyan-sm">
                1
              </div>
              <h3 className="font-bold text-dark-text-bright mb-2 group-hover:text-electric-cyan transition-colors duration-300">Add the Script</h3>
              <p className="text-dark-text-secondary text-sm">
                Include our lightweight JavaScript file from our CDN
              </p>
            </div>

            <div className="bg-dark-bg-card rounded-lg p-6 border border-dark-bg-tertiary hover:border-electric-cyan/50 transition-all duration-300 hover:shadow-glow-cyan-sm group">
              <div className="bg-gradient-electric text-dark-bg-primary w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-glow-cyan-sm">
                2
              </div>
              <h3 className="font-bold text-dark-text-bright mb-2 group-hover:text-electric-cyan transition-colors duration-300">Initialize</h3>
              <p className="text-dark-text-secondary text-sm">
                Configure with your API key and container element
              </p>
            </div>

            <div className="bg-dark-bg-card rounded-lg p-6 border border-dark-bg-tertiary hover:border-electric-cyan/50 transition-all duration-300 hover:shadow-glow-cyan-sm group">
              <div className="bg-gradient-electric text-dark-bg-primary w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-glow-cyan-sm">
                3
              </div>
              <h3 className="font-bold text-dark-text-bright mb-2 group-hover:text-electric-cyan transition-colors duration-300">Add Products</h3>
              <p className="text-dark-text-secondary text-sm">
                Use simple JavaScript calls to add items to cart
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img
              src="/integration-mockup-preview.png"
              alt="Basketo Widget Integration Preview"
              className="w-full h-auto rounded-xl shadow-2xl border border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300"
            />
          </div>

          <div className="mt-8 bg-dark-bg-card rounded-xl p-6 border border-electric-cyan/20">
            <div className="flex items-start gap-4">
              <div className="text-electric-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-dark-text-bright mb-2">
                  Full Customization Available
                </h4>
                <p className="text-dark-text-secondary text-sm">
                  Style the widget with CSS, add custom callbacks, configure payment options, and more.
                  Check our documentation for advanced features and API reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
