import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/catalog/catalogSlice";
import { selectFavorites } from "../../redux/catalog/catalogSelectors";
import clsx from "clsx";
import css from "./Card.module.css";
import Icon from "../Icon/Icon";
import CardModal from "../CardModal/CardModal";
import { useToggle } from "../../hooks/useToggle";

const Card = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favorite) => favorite.id === car.id);

  const { isOpen, openModal, closeModal } = useToggle();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(addToFavorites(car));
    }
  };

  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img className={css.image} src={car.img} alt={car.model} />
        <Icon
          id={isFavorite ? "icon-heart-filled" : "icon-heart-empty"}
          width={18}
          height={16}
          className={clsx(css.icon, { [css.favorite]: isFavorite })}
          onClick={handleFavoriteClick}
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
          {car.functionalities.length > 0 && <p>{car.functionalities[0]}</p>}
        </div>
      </div>

      <button className={css.btn} onClick={openModal}>
        Learn More
      </button>

      {isOpen && (
        <CardModal car={car} isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Card;
