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
  const isInCart = favorites.some((favorite) => favorite.id === item?.id);

  const handleCartClick = () => {
    if (isInCart) {
      dispatch(removeFromFavorites(item));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  const handleViewDetails = () => {
    // No functionality for now - can be used later for modal or product page
    console.log("View details for:", item.name);
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
        <button 
          className={clsx(css.cartIcon, {
            [css.inCart]: isInCart
          })}
          onClick={handleCartClick}
          disabled={!item.available}
          title={isInCart ? "Remove from cart" : "Add to cart"}
        >
          {isInCart ? "✕" : "🛒"}
        </button>
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

      <div className={css.buttonContainer}>
        <button 
          className={css.viewDetailsBtn}
          onClick={handleViewDetails}
          disabled={!item.available}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;