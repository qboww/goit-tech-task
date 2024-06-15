import React from "react";
import css from "./CardModal.module.css";

const CardModal = ({ car, closeModal }) => {
  return (
    <div className={css.modalOverlay} onClick={closeModal}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={closeModal}>
          X
        </button>
        <h2>
          {car.make} {car.model}
        </h2>
        <p>Year: {car.year}</p>
        <p>Rental Price: {car.rentalPrice}</p>
        <p>City: {car.city}</p>
        <p>Country: {car.country}</p>
        <p>Rental Company: {car.rentalCompany}</p>
        <p>Functionalities: {car.functionalities.join(", ")}</p>
        <img
          className={css.image}
          src={car.img}
          alt={`${car.make} ${car.model}`}
        />
      </div>
    </div>
  );
};

export default CardModal;
