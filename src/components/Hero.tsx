export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          E-commerce Made Simple.
          <span className="block text-primary mt-2">Powered by AI.</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Add a shopping cart to your website in under 15 minutes.
          No complex setup. No maintenance headaches.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#demo"
            className="bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started Free
          </a>
          <a
            href="#integration"
            className="bg-white hover:bg-gray-50 text-primary font-semibold px-8 py-4 rounded-lg text-lg border-2 border-primary transition-all duration-200"
          >
            View Documentation
          </a>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8">
          <div className="bg-gray-900 rounded-lg p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`<!-- Add Basketo to your site -->
<script src="https://cdn.basketo.com/widget.js"></script>
<div id="basketo-cart"></div>

<script>
  Basketo.init({ apiKey: 'your-api-key' });
</script>`}</code>
            </pre>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            That's it. Your e-commerce is ready.
          </p>
        </div>
      </div>
    </section>
  );
}
