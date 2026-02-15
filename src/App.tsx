import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProtectionDetails from './components/ProtectionDetails';
import Footer from './components/Footer';

// Auth
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
// Onboarding
import Onboarding from './components/onboarding/Onboarding';
// Dashboard
import DashboardLayout from './components/dashboard/DashboardLayout';
import Overview from './components/dashboard/Overview';
import Wallet from './components/dashboard/Wallet';
import Profile from './components/dashboard/Profile';
import Settings from './components/dashboard/Settings';
import Policies from './components/dashboard/Policies';
import Claims from './components/dashboard/Claims';
import Support from './components/dashboard/Support';

function App() {
  return (
    <Router>
      <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
        <Routes>
          {/* Public Routes - Uses Navbar/Footer */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/protection-plans" element={
            <>
              <Navbar />
              <ProtectionDetails />
              <Footer />
            </>
          } />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Onboarding Route */}
          <Route path="/onboarding" element={<Onboarding />} />

          {/* Dashboard Routes - Uses DashboardLayout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="policies" element={<Policies />} />
            <Route path="claims" element={<Claims />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
