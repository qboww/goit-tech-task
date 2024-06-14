import React from "react";
import css from "./Card.module.css";

import Icon from "../Icon/Icon";

const Card = ({ car }) => {
  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img className={css.image} src={car.img} alt={car.model} />
        <Icon
          id="icon-heart-empty"
          width={18}
          height={16}
          className={css.icon}
        />
      </div>

      <div className={css.dataContainer}>
        <div className={css.namePrice}>
          <p>
            {car.make} <span className={css.model}>{car.model}</span>,{" "}
            {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </div>
        <div className={css.tags}>
          <p>{city}</p>
          <p>{country}</p>
          <p>{car.rentalCompany}</p>
          {car.functionalities.length > 0 && <p>{car.accessories[0]}</p>}
        </div>
      </div>

      <button className={css.btn}>Learn More</button>
    </div>
  );
};

export default Card;
