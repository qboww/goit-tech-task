import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <div className={css.section}>
          <h4>About Us</h4>
          <p>
            Welcome to Car Rentals, your number one source for renting cars.
            We`re dedicated to providing you the best service, with a focus on
            dependability, customer service, and unique rental experiences.
          </p>
        </div>
        <div className={css.section}>
          <h4>Contact Information</h4>
          <p>Email: info@carrentals.com</p>
          <p>Phone: +1 800 123 4567</p>
        </div>
        <div className={css.section}>
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className={css.footerBottom}>
        <p>&copy; 2024 Car Rentals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
