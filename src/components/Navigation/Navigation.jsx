import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

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
            <div className={css.logo}>
              <NavLink to="/" className={css.logoLink}>
                DI
              </NavLink>
            </div>
            
            <nav className={css.navLinks}>
              <NavLink
                to="/"
                className={({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive })}
              >
                HOME
              </NavLink>
              <NavLink
                to="/catalog"
                className={({ isActive }) => clsx(css.navLink, { [css.activeLink]: isActive })}
              >
                ALL PRODUCTS
              </NavLink>
            </nav>

            <div className={css.navActions}>
              <div className={css.searchBox}>
                <input 
                  type="text" 
                  placeholder="SEARCH..." 
                  className={css.searchInput}
                />
              </div>
              <NavLink to="/cart" className={css.cartLink}>

                <span className={css.cartText}>CART</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;