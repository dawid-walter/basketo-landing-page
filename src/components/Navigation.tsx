import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Integration', href: '#integration' },
    { label: 'Demo', href: '#demo' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-dark-bg-secondary/95 backdrop-blur-lg border-b border-dark-bg-card shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Basketo Logo"
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <span className="text-2xl font-bold font-heading text-electric-cyan">
                Basketo
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-dark-text-secondary hover:text-electric-cyan font-medium transition-colors cursor-pointer relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-electric group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#demo"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#demo');
              }}
              className="text-electric-cyan hover:text-electric-green font-semibold transition-colors cursor-pointer"
            >
              Try Demo
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#pricing');
              }}
              className="bg-gradient-electric hover:shadow-glow-cyan text-dark-bg-primary font-semibold px-6 py-2 rounded-lg transition-all cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-text-secondary hover:text-electric-cyan focus:outline-none transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-bg-card">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-dark-text-secondary hover:text-electric-cyan font-medium transition-colors px-2 py-2 hover:bg-dark-bg-card rounded cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-dark-bg-card flex flex-col gap-2">
                <a
                  href="#demo"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#demo');
                  }}
                  className="text-center text-electric-cyan hover:text-electric-green font-semibold py-2 hover:bg-dark-bg-card rounded transition-colors cursor-pointer"
                >
                  Try Demo
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#pricing');
                  }}
                  className="text-center bg-gradient-electric hover:shadow-glow-cyan text-dark-bg-primary font-semibold px-6 py-2 rounded-lg transition-all cursor-pointer"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
