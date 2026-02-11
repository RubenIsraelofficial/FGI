import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import RecoverySection from './components/RecoverySection';
import CommunitySection from './components/CommunitySection';
import ClaimsSection from './components/ClaimsSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <RecoverySection />
      <CommunitySection />
      <ClaimsSection />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
