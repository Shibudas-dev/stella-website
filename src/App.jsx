import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Commands from './pages/Commands';
import Premium from './pages/Premium';
import Redirect from './pages/Redirect';
import './index.css';

import Navbar from './components/Navbar';

function App() {
  // PLACEHOLDER LINKS - User to replace these
  const INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1442491045458874468";
  const SUPPORT_LINK = "https://discord.gg/V5kyZXWVxc";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/invite" element={<Redirect to={INVITE_LINK} />} />
        <Route path="/support" element={<Redirect to={SUPPORT_LINK} />} />
      </Routes>
    </Router>
  );
}

export default App;
