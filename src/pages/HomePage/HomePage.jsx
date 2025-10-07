import React from "react";
import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      {/* Hero Banner */}
      <div className={css.heroBanner}>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>NEW COLLECTION 2025</h1>
          <p className={css.heroSubtitle}>Discover the essence of modern elegance</p>
          <NavLink to="/catalog" className={css.heroButton}>
            SHOP NOW
          </NavLink>
        </div>
        <img 
          src="/images/hero-banner.jpg" 
          alt="New Collection 2025"
          className={css.heroImage}
        />
      </div>

      {/* Categories Grid */}
      <div className={css.categoriesSection}>
        <div className={css.categoryCard}>
          <img src="/images/women-category.jpg" alt="Women's Collection" className={css.categoryImage} />
          <div className={css.categoryOverlay}>
            <h3>WOMEN</h3>
            <NavLink to="/catalog?category=Women" className={css.categoryLink}>
              DISCOVER →
            </NavLink>
          </div>
        </div>
        <div className={css.categoryCard}>
          <img src="/images/men-category.jpg" alt="Men's Collection" className={css.categoryImage} />
          <div className={css.categoryOverlay}>
            <h3>MEN</h3>
            <NavLink to="/catalog?category=Men" className={css.categoryLink}>
              DISCOVER →
            </NavLink>
          </div>
        </div>
        <div className={css.categoryCard}>
          <img src="/images/kids-category.jpg" alt="Kids' Collection" className={css.categoryImage} />
          <div className={css.categoryOverlay}>
            <h3>KIDS</h3>
            <NavLink to="/catalog?category=Kids" className={css.categoryLink}>
              DISCOVER →
            </NavLink>
          </div>
        </div>
      </div>

      {/* Trending Now */}
      <div className={css.trendingSection}>
        <div className={css.sectionHeader}>
          <h2>TRENDING NOW</h2>
          <NavLink to="/catalog" className={css.viewAllLink}>
            VIEW ALL
          </NavLink>
        </div>
        <div className={css.trendingGrid}>
          <div className={css.trendingItem}>
            <img src="/images/trending-1.jpg" alt="Minimalist Jackets" className={css.trendingImage} />
            <div className={css.trendingInfo}>
              <h4>MINIMALIST JACKETS</h4>
              <p>Essential outerwear for modern wardrobes</p>
            </div>
          </div>
          <div className={css.trendingItem}>
            <img src="/images/trending-2.jpg" alt="Linen Collection" className={css.trendingImage} />
            <div className={css.trendingInfo}>
              <h4>LINEN COLLECTION</h4>
              <p>Breathable fabrics for summer days</p>
            </div>
          </div>
          <div className={css.trendingItem}>
            <img src="/images/trending-3.jpg" alt="Evening Wear" className={css.trendingImage} />
            <div className={css.trendingInfo}>
              <h4>EVENING WEAR</h4>
              <p>Elegant pieces for special occasions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summer Sale Banner */}
      <div className={css.saleBanner}>
        <div className={css.saleContent}>
          <h2>SUMMER SALE</h2>
          <p>UP TO 50% OFF SELECTED ITEMS</p>
          <NavLink to="/catalog?sale=true" className={css.saleButton}>
            SHOP SALE
          </NavLink>
        </div>
        <img 
          src="/images/sale-banner.jpg" 
          alt="Summer Sale"
          className={css.saleImage}
        />
      </div>

      {/* Features */}
      <div className={css.featuresSection}>
        <div className={css.feature}>
          <div className={css.featureIcon}>🚚</div>
          <h4>FREE SHIPPING</h4>
          <p>On orders over $50</p>
        </div>
        <div className={css.feature}>
          <div className={css.featureIcon}>↩️</div>
          <h4>30-DAY RETURNS</h4>
          <p>Easy return policy</p>
        </div>
        <div className={css.feature}>
          <div className={css.featureIcon}>🔒</div>
          <h4>SECURE PAYMENT</h4>
          <p>Safe & encrypted</p>
        </div>
        <div className={css.feature}>
          <div className={css.featureIcon}>💎</div>
          <h4>PREMIUM QUALITY</h4>
          <p>Carefully crafted</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;