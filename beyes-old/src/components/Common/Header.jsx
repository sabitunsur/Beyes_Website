import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import beyesLogo from '../../assets/image/logo/beyes_logo_red.png';
import kariyerLogo from '../../assets/image/career/Kariyer-logo.png';
import { navItems } from '../../constants/navigation';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { handleSmoothNavigation, handleHashScroll } from '../../utils/navigationUtils';
import { createDropdownManager } from '../../utils/dropdownUtils';
import { createMobileMenuManager } from '../../utils/mobileMenuUtils';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize utility managers
  const dropdownManager = useMemo(() => createDropdownManager(), []);
  const mobileMenuManager = useMemo(() => createMobileMenuManager(), []);

  // Kariyer sayfalarında farklı logo göster
  const isCareerPage = location.pathname.startsWith('/career');
  const currentLogo = isCareerPage ? kariyerLogo : beyesLogo;

  // Smooth scroll için link handler
  const handleSmoothScroll = (href, e) => {
    handleSmoothNavigation(href, location, navigate, e);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (index) => {
    dropdownManager.handleMouseEnter(setActiveDropdown, index);
  };

  const handleMouseLeave = () => {
    dropdownManager.handleMouseLeave(setActiveDropdown);
  };

  const toggleMobileMenu = () => {
    mobileMenuManager.toggleMobileMenu(isMobileMenuOpen, setIsMobileMenuOpen, setMobileDropdowns);
  };

  const toggleMobileDropdown = (index) => {
    mobileMenuManager.toggleMobileDropdown(index, setMobileDropdowns);
  };

  const closeMobileMenu = () => {
    mobileMenuManager.closeMobileMenu(setIsMobileMenuOpen, setMobileDropdowns);
  };

  // Component unmount olduğunda timeout'u temizle
  useEffect(() => {
    return () => {
      dropdownManager.cleanup();
    };
  }, [dropdownManager]);

  // URL'de hash varsa scroll yap
  useEffect(() => {
    handleHashScroll(location);
  }, [location]);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={currentLogo} alt="Beyes Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav desktop-nav">
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li 
                key={item.label} 
                className={`header__nav-item ${item.submenu ? 'has-dropdown' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={item.href}>{item.label}</Link>
                {item.submenu && (
                  <div 
                    className={`dropdown-menu ${activeDropdown === index ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link 
                            to={subItem.href} 
                            onClick={(e) => handleSmoothScroll(subItem.href, e)}
                          >
                            {subItem.icon && (
                              <span className="icon">
                                {subItem.icon}
                              </span>
                            )}
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li className="header__lang-switch">
              <Link to="#">TR</Link> | <Link to="#">EN</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <Close /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li 
                key={item.label} 
                className={`header__nav-item ${item.submenu ? 'has-dropdown' : ''} ${mobileDropdowns[index] ? 'active' : ''}`}
              >
                <div className="mobile-nav-item-header">
                  <Link to={item.href} onClick={closeMobileMenu}>{item.label}</Link>
                  {item.submenu && (
                    <button 
                      className="mobile-dropdown-toggle"
                      onClick={() => toggleMobileDropdown(index)}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ExpandMore />
                    </button>
                  )}
                </div>
                {item.submenu && (
                  <div className={`mobile-dropdown-menu ${mobileDropdowns[index] ? 'active' : ''}`}>
                    <ul>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link 
                            to={subItem.href} 
                            onClick={(e) => {
                              handleSmoothScroll(subItem.href, e);
                              closeMobileMenu();
                            }}
                          >
                            {subItem.icon && (
                              <span className="icon">
                                {subItem.icon}
                              </span>
                            )}
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li className="header__lang-switch">
              <Link to="#" onClick={closeMobileMenu}>TR</Link> | <Link to="#" onClick={closeMobileMenu}>EN</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
