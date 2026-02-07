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
    <section id="integration" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Integration in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Copy, paste, and you're ready to accept orders
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between bg-gray-800 px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">index.html</span>
              <button
                onClick={handleCopy}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded text-sm transition-colors duration-200"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-green-400">{codeExample}</code>
              </pre>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Add the Script</h3>
              <p className="text-gray-600 text-sm">
                Include our lightweight JavaScript file from our CDN
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Initialize</h3>
              <p className="text-gray-600 text-sm">
                Configure with your API key and container element
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Add Products</h3>
              <p className="text-gray-600 text-sm">
                Use simple JavaScript calls to add items to cart
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Full Customization Available
                </h4>
                <p className="text-gray-600 text-sm">
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
