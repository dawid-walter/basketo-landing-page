export default function Hero() {
  return (
    <section className="relative bg-dark-bg-primary py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/bg-pattern-grid.png)', backgroundRepeat: 'repeat', backgroundSize: '600px' }}></div>
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 via-transparent to-electric-green/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-green/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-dark-text-bright mb-6">
          E-commerce Made Simple.
          <span className="block text-electric-cyan mt-2">
            Powered by AI.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-dark-text-secondary mb-12 max-w-3xl mx-auto">
          Add a shopping cart to your website in under 15 minutes.
          No complex setup. No maintenance headaches.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#demo"
            className="bg-gradient-electric hover:shadow-glow-cyan text-dark-bg-primary font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Get Started Free
          </a>
          <a
            href="#integration"
            className="bg-dark-bg-card hover:bg-dark-bg-tertiary text-electric-cyan font-semibold px-8 py-4 rounded-lg text-lg border-2 border-electric-cyan/50 hover:border-electric-cyan transition-all duration-300 hover:shadow-glow-cyan-sm"
          >
            View Documentation
          </a>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <img
            src="/hero-main-illustration.png"
            alt="Basketo E-commerce Platform Illustration"
            className="w-full h-auto rounded-xl shadow-2xl border border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300"
          />
        </div>

        <div className="max-w-4xl mx-auto bg-dark-bg-card rounded-xl shadow-2xl border border-dark-bg-tertiary hover:border-electric-cyan/30 transition-all duration-300 p-8 group">
          <div className="bg-dark-bg-secondary rounded-lg p-6 text-left border border-dark-bg-tertiary group-hover:border-electric-cyan/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-glow-cyan-sm"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-glow-cyan-sm"></div>
              <div className="w-3 h-3 rounded-full bg-electric-green shadow-glow-green-sm"></div>
            </div>
            <pre className="text-electric-green text-sm overflow-x-auto">
              <code>{`<!-- Add Basketo to your site -->
<script src="https://cdn.basketo.com/widget.js"></script>
<div id="basketo-cart"></div>

<script>
  Basketo.init({ apiKey: 'your-api-key' });
</script>`}</code>
            </pre>
          </div>
          <p className="text-dark-text-secondary text-sm mt-4">
            That's it. Your e-commerce is ready.
          </p>
        </div>
      </div>
    </section>
  );
}
