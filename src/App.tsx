import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Integration from './components/Integration';
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <Integration />
      <Demo />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
