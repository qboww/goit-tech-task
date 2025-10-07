import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/catalog/catalogSlice";
import { selectFavorites } from "../../redux/catalog/catalogSelectors";
import clsx from "clsx";
import css from "./Card.module.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);
  const isInCart = favorites.some((favorite) => favorite.id === item?.id);

  const handleCartClick = (e) => {
    e.stopPropagation();
    if (isInCart) {
      dispatch(removeFromFavorites(item));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${item.id}`);
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
      <div className={css.imageContainer} onClick={handleCardClick}>
        <img
          className={css.image}
          src={item.img || "/images/placeholder-product.jpg"}
          alt={item.name || "Product image"}
        />
        <button
          className={clsx(css.cartIcon, {
            [css.inCart]: isInCart,
          })}
          onClick={handleCartClick}
          disabled={!item.available}
          title={isInCart ? "Remove from cart" : "Add to cart"}
        >
          {isInCart ? "✕" : "+"}
        </button>
        {!item.available && (
          <div className={css.soldOut}>SOLD OUT</div>
        )}
      </div>

      <div className={css.productInfo}>
        <h3 className={css.productName}>{item.name}</h3>
        <p className={css.productDescription}>{item.description}</p>
        <div className={css.priceSection}>
          <span className={css.price}>${item.price}</span>
          {item.originalPrice && (
            <span className={css.originalPrice}>${item.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;