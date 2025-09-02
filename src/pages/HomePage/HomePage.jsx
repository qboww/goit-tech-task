import { useState } from "react";
import css from "./HomePage.module.css";
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false); // reset when closing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    setIsSubmitted(true);

    // Trigger FB Pixel Lead event
    if (typeof fbq !== "undefined") {
      fbq("track", "Lead");
    }

    console.log("✅ Form submitted!");
  };

  return (
    <div className="container">
      <div className={css.heroSection}>
        <div className={css.content}>
          <h1>Welcome to Our Plumbing Store</h1>
          <p>Find the best plumbing fixtures with unbeatable prices.</p>
          <button className={css.ctaButton} onClick={handleOpenModal}>
            Contact us
          </button>
        </div>
      </div>

      <div className={css.featuresSection}>
        <h2>Why Choose Us?</h2>
        <div className={css.features}>
          <div className={css.feature}>
            <h3>Wide Selection</h3>
            <p>
              Choose from a wide range of plumbing fixtures to suit your needs
              and preferences.
            </p>
          </div>
          <div className={css.feature}>
            <h3>Affordable Prices</h3>
            <p>
              We offer competitive prices and great deals on all our plumbing
              service.
            </p>
          </div>
          <div className={css.feature}>
            <h3>Convenient Locations</h3>
            <p>
              Pick up and drop off your plumbing fixtures at any of our
              convenient locations.
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Contact us</h2>
        {!isSubmitted ? (
          <form className={css.form} onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" required />
            </label>
            <label>
              Email:
              <input type="email" required />
            </label>
            <label>
              Write a message:
              <textarea type="date" />
            </label>
            <button type="submit" className={css.submitButton}>
              Submit
            </button>
          </form>
        ) : (
          <p className={css.successMessage}>
            🎉 Thank you! We’ll get in touch soon.
          </p>
        )}
      </Modal>
    </div>
  );
};

export default HomePage;
