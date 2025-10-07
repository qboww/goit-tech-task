import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/catalog/catalogSlice";
import { selectFavorites } from "../../redux/catalog/catalogSelectors";
import clsx from "clsx";
import css from "./Card.module.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favorite) => favorite.id === item?.id);

  const handleViewDetailsClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  if (!item) {
    return (
      <div className={css.card}>
        <div className={css.error}>Product not available</div>
      </div>
    );
  }

  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img 
          className={css.image} 
          src={item.img || "/placeholder-image.jpg"} 
          alt={item.name || "Product image"} 
        />
      </div>

      <div className={css.dataContainer}>
        <div className={css.namePrice}>
          <h3 className={css.name}>{item.name || "Unknown Product"}</h3>
          <p className={css.price}>${item.price || "N/A"}</p>
        </div>
        
        <div className={css.brandCategory}>
          <p>{item.brand || "No brand"}</p>
          <p>{item.category || "Uncategorized"}</p>
        </div>

        {item.description && (
          <p className={css.description}>{item.description}</p>
        )}

        <div className={css.availability}>
          <span className={clsx(css.status, {
            [css.available]: item.available,
            [css.unavailable]: !item.available
          })}>
            {item.available ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      <button 
        className={clsx(css.btn, {
          [css.favoriteBtn]: isFavorite
        })}
        onClick={handleViewDetailsClick}
        disabled={!item.available}
      >
        {isFavorite ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Card;