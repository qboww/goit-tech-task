import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/catalog/catalogSelectors";
import Catalog from "../../components/Catalog/Catalog";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="container">
      {favorites.length === 0 ? (
        <p>You have no favorite cars.</p>
      ) : (
        <Catalog items={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;
