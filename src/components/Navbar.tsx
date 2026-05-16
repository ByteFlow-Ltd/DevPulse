import React from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Bell, Search, Code2, Menu, X } from 'lucide-react';
import '../styles/Layout.css';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const pageTitle = location.pathname === '/kanban' ? 'Sprint operations' : 'Telemetry Overview';

  return (
    <header className="dp-navbar">
      
      {/* LEFT AREA: PAGE IDENTITY & RESPONSIVE TOGGLE TRIGGER */}
      <div className="nav-left">
        <button 
          className="mobile-hamburger-trigger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle system map"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        
        <div className="nav-title-meta">
          <span className="nav-badge">TS Strict Mode</span>
          <h1>{pageTitle}</h1>
        </div>
      </div>

      {/* RIGHT AREA: USER TELEMETRY & APP SEARCH CONTROL */}
      <div className="nav-right">
        <div className="nav-search">
          <Search size={14} />
          <input type="text" placeholder="Query cluster architecture..." />
        </div>

        <div className="nav-date-pill">
          <Calendar size={12} />
          <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
        </div>

        <button className="nav-icon-btn" aria-label="System alarms active">
          <Bell size={16} />
          <span className="btn-badge-pink"></span>
        </button>

        <div className="user-profile-plate">
          <div className="profile-avatar-wrapper">
            <Code2 size={16} />
          </div>
          <div className="profile-info-text">
            <h4>Root_Architect</h4>
            <span>Sprint Master</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
