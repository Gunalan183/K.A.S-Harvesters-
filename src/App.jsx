import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

import Hero from './sections/Hero';
import Machinery from './sections/Machinery';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import Gallery from './sections/Gallery';
import About from './sections/About';
import FAQ from './sections/FAQ';

// Section dividers
function GreenDivider() {
  return (
    <div className="w-full overflow-hidden leading-none bg-white">
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="w-full h-10 fill-green-950"
        aria-hidden="true"
      >
        <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
      </svg>
    </div>
  );
}

function WheatDivider({ fromDark }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${fromDark ? 'bg-green-950' : 'bg-white'}`}>
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className={`w-full h-10 ${fromDark ? 'fill-white' : 'fill-green-950'}`}
        aria-hidden="true"
      >
        <path d="M0,0 C480,40 960,0 1440,30 L1440,40 L0,40 Z" />
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Machinery */}
        <Machinery />

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-green-200 via-amber-300 to-green-200" />

        {/* 3. Services */}
        <Services />

        {/* 4. Why Us & How It Works */}
        <WhyUs />

        {/* 6. Gallery */}
        {/* 6. Gallery & Videos */}
        <Gallery />

        {/* 8. About, Location & Contact */}
        <About />

        {/* 12. FAQ */}
        <FAQ />
      </main>

      <Footer />

      {/* Mobile sticky action bar */}
      {/* Add bottom padding on mobile so content isn't hidden behind bar */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <MobileActionBar />
    </div>
  );
}
