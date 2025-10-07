import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.navContainer}>
        <div className={css.logo}>
          <NavLink to="/" className={css.logoLink}>
            Di Brand
          </NavLink>
        </div>
        <nav className={css.navLinks}>
          <NavLink
            to="/"
            className={({ isActive }) => clsx({ [css.activeLink]: isActive })}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => clsx({ [css.activeLink]: isActive })}
          >
            Catalog
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => clsx({ [css.activeLink]: isActive })}
          >
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
