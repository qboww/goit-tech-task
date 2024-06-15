import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/catalog/catalogSlice";
import Card from "../../components/Card/Card";
import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.container}>
      <h2>Your Favorite Cars</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite cars.</p>
      ) : (
        <div className={css.cardsList}>
          {favorites.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
