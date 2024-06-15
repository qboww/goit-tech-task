import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/catalog/catalogSelectors";
import Catalog from "../../components/Catalog/Catalog";

import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="container">
      {favorites.length === 0 ? (
        <p className={css.notFound}>You have no favorite ads...</p>
      ) : (
        <div>
          <h2 className={css.header}>Favorite car ads</h2>
          <Catalog items={favorites} />
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
