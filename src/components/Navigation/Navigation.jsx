import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <div className={css.topBar}>
        <div className="container">
          <div className={css.topBarContent}>
            <span>FREE SHIPPING ON ORDERS OVER $50</span>
            <div className={css.topBarLinks}>
              <a href="/stores">STORES</a>
              <a href="/customer-service">CUSTOMER SERVICE</a>
              <a href="/newsletter">NEWSLETTER</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={css.mainNav}>
        <div className="container">
          <div className={css.navContainer}>
            {/* Mobile Menu Button */}
            <button 
              className={css.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={css.hamburger}>
                <span className={css.hamburgerLine}></span>
                <span className={css.hamburgerLine}></span>
                <span className={css.hamburgerLine}></span>
              </span>
            </button>

            <div className={css.logo}>
              <NavLink to="/" className={css.logoLink} onClick={closeMobileMenu}>
                DI
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <nav className={css.navLinks}>
              <NavLink
                to="/"
                className={({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive })}
                onClick={closeMobileMenu}
              >
                HOME
              </NavLink>
              <NavLink
                to="/catalog"
                className={({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive })}
                onClick={closeMobileMenu}
              >
                ALL PRODUCTS
              </NavLink>
            </nav>

            <div className={css.navActions}>
              {/* Search - Hidden on mobile */}
              <div className={css.searchBox}>
                <input 
                  type="text" 
                  placeholder="SEARCH..." 
                  className={css.searchInput}
                />
              </div>
              
              {/* Cart with icon only on mobile */}
              <NavLink 
                to="/cart" 
                className={css.cartLink}
                onClick={closeMobileMenu}
              >
                <span className={css.cartText}>CART</span>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={clsx(css.mobileMenu, { [css.mobileMenuOpen]: isMobileMenuOpen })}>
            <div className={css.mobileMenuContent}>
              <nav className={css.mobileNavLinks}>
                <NavLink
                  to="/"
                  className={({ isActive }) => clsx(css.mobileNavLink, { [css.mobileActiveLink]: isActive })}
                  onClick={closeMobileMenu}
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) => clsx(css.mobileNavLink, { [css.mobileActiveLink]: isActive })}
                  onClick={closeMobileMenu}
                >
                  ALL PRODUCTS
                </NavLink>
              </nav>
              
              {/* Mobile Search */}
              <div className={css.mobileSearch}>
                <input 
                  type="text" 
                  placeholder="SEARCH..." 
                  className={css.mobileSearchInput}
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu Backdrop */}
          {isMobileMenuOpen && (
            <div 
              className={css.mobileMenuBackdrop}
              onClick={closeMobileMenu}
            ></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;