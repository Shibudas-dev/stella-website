import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Commands from './pages/Commands';
import Premium from './pages/Premium';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Redirect from './pages/Redirect';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

import Navbar from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // PLACEHOLDER LINKS - User to replace these
  const INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1442491045458874468";
  const SUPPORT_LINK = "https://discord.gg/V5kyZXWVxc";

  // Check if this is a page load (not navigation)
  useEffect(() => {
    // Only show loading on initial page load
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasLoaded', 'true');
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commands" element={<Commands />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/invite" element={<Redirect to={INVITE_LINK} />} />
          <Route path="/support" element={<Redirect to={SUPPORT_LINK} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
