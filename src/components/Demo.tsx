export default function Demo() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            See It in Action
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience Basketo firsthand with our live demo shop
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gray-900 px-6 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400 text-sm font-mono">localhost:5175</span>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <div className="text-gray-900 mb-4">
                <svg className="w-20 h-20 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Dragon Figurines Shop
              </h3>
              <p className="text-gray-600 mb-6">
                A fully functional demo e-commerce site powered by Basketo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://localhost:5175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
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
                  className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-lg border-2 border-gray-300 transition-all duration-200 inline-flex items-center justify-center gap-2"
                >
                  <span>Admin Dashboard</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-green-600 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-900">Add to Cart</p>
                <p className="text-xs text-gray-600">Try adding products</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-green-600 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-900">Checkout Flow</p>
                <p className="text-xs text-gray-600">Test the process</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-green-600 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-gray-900">Admin Panel</p>
                <p className="text-xs text-gray-600">View orders</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-100 text-lg">
            No signup required. Test everything in a sandbox environment.
          </p>
        </div>
      </div>
    </section>
  );
}
