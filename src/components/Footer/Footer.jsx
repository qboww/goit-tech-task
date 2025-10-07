import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      {/* Newsletter Section */}
      <div className={css.newsletterSection}>
        <div className="container">
          <div className={css.newsletterContent}>
            <h3>NEWSLETTER</h3>
            <p>Subscribe to receive news about our latest offers and collections</p>
            <div className={css.newsletterForm}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className={css.emailInput}
              />
              <button className={css.subscribeButton}>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={css.mainFooter}>
        <div className="container">
          <div className={css.footerContent}>
            <div className={css.footerSections}>
              <div className={css.footerSection}>
                <h4>CUSTOMER SERVICE</h4>
                <ul>
                  <li><a href="/contact">CONTACT US</a></li>
                  <li><a href="/shipping">SHIPPING INFORMATION</a></li>
                  <li><a href="/returns">RETURNS & EXCHANGES</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/size-guide">SIZE GUIDE</a></li>
                </ul>
              </div>
              
              <div className={css.footerSection}>
                <h4>THE COMPANY</h4>
                <ul>
                  <li><a href="/about">ABOUT DI</a></li>
                  <li><a href="/careers">CAREERS</a></li>
                  <li><a href="/sustainability">SUSTAINABILITY</a></li>
                  <li><a href="/press">PRESS</a></li>
                  <li><a href="/corporate">CORPORATE INFORMATION</a></li>
                </ul>
              </div>
              
              <div className={css.footerSection}>
                <h4>STORES</h4>
                <ul>
                  <li><a href="/stores">FIND A STORE</a></li>
                  <li><a href="/appointments">PERSONAL SHOPPING</a></li>
                  <li><a href="/gift-cards">GIFT CARDS</a></li>
                  <li><a href="/student-discount">STUDENT DISCOUNT</a></li>
                </ul>
              </div>
              
              <div className={css.footerSection}>
                <h4>FOLLOW US</h4>
                <div className={css.socialLinks}>
                  <a href="#" aria-label="Instagram">INSTAGRAM</a>
                  <a href="#" aria-label="Facebook">FACEBOOK</a>
                  <a href="#" aria-label="Twitter">TWITTER</a>
                  <a href="#" aria-label="Pinterest">PINTEREST</a>
                  <a href="#" aria-label="TikTok">TIKTOK</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={css.footerBottom}>
        <div className="container">
          <div className={css.footerBottomContent}>
            <div className={css.countrySelector}>
              <span>UNITED STATES | $</span>
            </div>
            <div className={css.legalLinks}>
              <a href="/privacy">PRIVACY POLICY</a>
              <a href="/terms">TERMS & CONDITIONS</a>
              <a href="/cookies">COOKIES</a>
              <a href="/accessibility">ACCESSIBILITY</a>
            </div>
            <div className={css.copyright}>
              <p>&copy; 2025 DI. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;