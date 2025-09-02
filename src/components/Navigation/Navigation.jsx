import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.navContainer}>
        <div className={css.logo}>
          <NavLink to="/" className={css.logoLink}>
            SantehStyle
          </NavLink>
        </div>
        <nav className={css.navLinks}>
          <NavLink
            to="/"
            className={({ isActive }) => clsx({ [css.activeLink]: isActive })}
          >
            Home
          </NavLink>
          <NavLink>Catalog</NavLink>
          <NavLink>Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
