import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <div className={css.section}>
          <h4>About Us</h4>
          <p>
            Welcome to SantehStyle, your number one source for selling plumbing.
            We`re dedicated to providing you the best service, with a focus on
            dependability and customer service.
          </p>
        </div>
        <div className={css.section}>
          <h4>Contact Information</h4>
          <p>Email: info@santehstyle.com</p>
          <p>Phone: +1 800 123 4567</p>
        </div>
        <div className={css.section}>
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className={css.footerBottom}>
        <p>&copy; 2024 SantehStyle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
