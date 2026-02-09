export default function Demo() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url(/bg-pattern-grid.png)', backgroundRepeat: 'repeat', backgroundSize: '600px' }}></div>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 via-transparent to-electric-green/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-green/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-dark-text-bright mb-4">
            See It in{" "}
            <span className="text-electric-cyan">
              Action
            </span>
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Experience Basketo firsthand with our live demo shop
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <img
            src="/demo-section-preview.png"
            alt="Basketo Demo Shop Preview"
            className="w-full h-auto rounded-xl shadow-2xl border border-electric-cyan/20 hover:border-electric-cyan/40 transition-all duration-300"
          />
        </div>

        <div className="max-w-4xl mx-auto bg-dark-bg-card rounded-2xl shadow-2xl overflow-hidden border border-dark-bg-tertiary hover:border-electric-cyan/30 transition-all duration-300">
          <div className="bg-dark-bg-secondary px-6 py-3 flex items-center gap-2 border-b border-dark-bg-tertiary">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-glow-cyan-sm"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-glow-cyan-sm"></div>
            <div className="w-3 h-3 rounded-full bg-electric-green shadow-glow-green-sm"></div>
            <span className="ml-4 text-dark-text-secondary text-sm font-mono">localhost:5175</span>
          </div>

          <div className="bg-dark-bg-card p-12 text-center">
            <div className="bg-dark-bg-secondary rounded-xl shadow-lg border border-dark-bg-tertiary hover:border-electric-cyan/30 transition-all duration-300 p-8 mb-6 group">
              <div className="text-electric-cyan group-hover:text-electric-green transition-colors duration-300 mb-4">
                <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-dark-text-bright mb-2">
                Dragon Figurines Shop
              </h3>
              <p className="text-dark-text-secondary mb-6">
                A fully functional demo e-commerce site powered by Basketo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://localhost:5175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-electric hover:shadow-glow-cyan text-dark-bg-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <span>Visit Demo Shop</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="http://localhost:5173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-bg-card hover:bg-dark-bg-tertiary text-electric-cyan font-semibold px-8 py-3 rounded-lg border-2 border-electric-cyan/50 hover:border-electric-cyan transition-all duration-300 hover:shadow-glow-cyan-sm inline-flex items-center justify-center gap-2"
                >
                  <span>Admin Dashboard</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <div className="bg-dark-bg-secondary rounded-lg p-4 border border-dark-bg-tertiary hover:border-electric-green/50 transition-all duration-300 hover:shadow-glow-green-sm group">
                <div className="text-electric-green mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-dark-text-bright group-hover:text-electric-cyan transition-colors duration-300">Add to Cart</p>
                <p className="text-xs text-dark-text-secondary">Try adding products</p>
              </div>
              <div className="bg-dark-bg-secondary rounded-lg p-4 border border-dark-bg-tertiary hover:border-electric-green/50 transition-all duration-300 hover:shadow-glow-green-sm group">
                <div className="text-electric-green mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-dark-text-bright group-hover:text-electric-cyan transition-colors duration-300">Checkout Flow</p>
                <p className="text-xs text-dark-text-secondary">Test the process</p>
              </div>
              <div className="bg-dark-bg-secondary rounded-lg p-4 border border-dark-bg-tertiary hover:border-electric-green/50 transition-all duration-300 hover:shadow-glow-green-sm group">
                <div className="text-electric-green mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-dark-text-bright group-hover:text-electric-cyan transition-colors duration-300">Admin Panel</p>
                <p className="text-xs text-dark-text-secondary">View orders</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-dark-text-secondary text-lg">
            No signup required. Test everything in a sandbox environment.
          </p>
        </div>
      </div>
    </section>
  );
}
