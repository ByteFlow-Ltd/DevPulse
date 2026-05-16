import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Kanban, Layers, Users, Settings, Terminal, LogOut } from 'lucide-react';
import '../styles/Layout.css';

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  
  const handleLogout = () => {
    const confirmLogout = window.confirm("Execute system teardown? Disconnecting current engineer thread.");
    if (confirmLogout) {
      console.log("[SYSTEM] User logout initialized. Clearing runtime sessions.");
      // Aha niho uzashyira logic yo gufunga session yawe (Auth context clearance)
    }
  };

  return (
    <aside className={`dp-sidebar ${isMenuOpen ? 'mobile-show' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Terminal size={18} />
        </div>
        <h2>Dev<span>Pulse</span></h2>
      </div>

      <p className="sidebar-label">Workspace Core</p>
      <nav className="sidebar-nav">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard Overview</span>
        </NavLink>
        <NavLink 
          to="/kanban" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <Kanban size={18} />
          <span>Sprint Kanban</span>
        </NavLink>
      </nav>

      <p className="sidebar-label">Architecture</p>
      <div className="sidebar-nav disabled-links">
        <div className="nav-link-dummy">
          <Layers size={18} />
          <span>Micro-Modules</span>
        </div>
        <div className="nav-link-dummy">
          <Users size={18} />
          <span>Team Clusters</span>
        </div>
        <div className="nav-link-dummy">
          <Settings size={18} />
          <span>System Settings</span>
        </div>
      </div>

      {/* FOOTER AREA WITH LIVE PULSE AND INTERACTIVE LOGOUT SYSTEM */}
      <div className="sidebar-footer">
        <div className="system-pulse-tag">
          <div className="pulse-dot"></div>
          <span>Engine v1.0.0-TS</span>
        </div>
        
        <button className="sidebar-logout-btn" onClick={handleLogout} aria-label="Terminate session">
          <LogOut size={16} />
          <span>Disconnect Thread</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
