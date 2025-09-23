import React from "react";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className={css.heroSection}>
        <div className={css.content}>
          <h1>Welcome to Our Car Rental Service</h1>
          <p>Find the best rental cars with unbeatable prices.</p>
          <a href="/catalog" className={css.ctaButton}>
            Explore Cars
          </a>
        </div>
      </div>
      <div className={css.featuresSection}>
        <h2>Why Choose Us?</h2>
        <div className={css.features}>
          <div className={css.feature}>
            <h3>Wide Selection</h3>
            <p>
              Choose from a wide range of cars to suit your needs and
              preferences.
            </p>
          </div>
          <div className={css.feature}>
            <h3>Affordable Prices</h3>
            <p>
              We offer competitive prices and great deals on all our rental
              cars.
            </p>
          </div>
          <div className={css.feature}>
            <h3>Convenient Locations</h3>
            <p>
              Pick up and drop off your rental car at any of our convenient
              locations. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
