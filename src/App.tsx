import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProtectionDetails from './components/ProtectionDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protection-plans" element={<ProtectionDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
