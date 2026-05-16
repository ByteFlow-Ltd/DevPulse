import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../styles/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Mobile responsive layout tracking state
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="dp-layout-root">
      {/* Backdrop overlay for mobile viewport menus */}
      {isMenuOpen && (
        <div className="mobile-sidebar-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="dp-main-content">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="dp-page-container">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
