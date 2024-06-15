import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/catalog/catalogSlice";
import Catalog from "../../components/Catalog/Catalog";
import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.container}>
      {favorites.length === 0 ? (
        <p>You have no favorite cars.</p>
      ) : (
        <Catalog items={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
