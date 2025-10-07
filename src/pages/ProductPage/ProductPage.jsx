import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalogItems } from "../../redux/catalog/catalogSelectors";
import { selectFavorites } from "../../redux/catalog/catalogSelectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/catalog/catalogSlice";
import toast from "react-hot-toast";
import css from "./ProductPage.module.css";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);

  const items = useSelector(selectCatalogItems);
  const favorites = useSelector(selectFavorites);

  const product = items.find((item) => item.id === parseInt(productId));
  const isInCart = favorites.some((favorite) => favorite.id === product?.id);

  const handleAddToCart = () => {
    if (!product) return;

    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast("PLEASE SELECT A SIZE", {
        icon: "⚠️",
        style: {
          background: "#000",
          color: "#fff",
          borderRadius: "0",
          fontSize: "11px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          border: "1px solid #ff4444",
        },
      });
      return;
    }

    // No size requirement - can add directly
    if (isInCart) {
      dispatch(removeFromFavorites(product));
      toast("REMOVED FROM SHOPPING BAG", {
        style: {
          background: "#000",
          color: "#fff",
          borderRadius: "0",
          fontSize: "11px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
      });
    } else {
      dispatch(addToFavorites(product));
      toast("ADDED TO SHOPPING BAG", {
        style: {
          background: "#000",
          color: "#fff",
          borderRadius: "0",
          fontSize: "11px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
      });
    }
  };

  const handleBuyNow = () => {
    if (!product) return;

    // No size requirement for buy now either
    if (!isInCart) {
      dispatch(addToFavorites(product));
    }

    navigate("/cart");
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    toast(`SIZE ${size} SELECTED`, {
      style: {
        background: "#000",
        color: "#fff",
        borderRadius: "0",
        fontSize: "11px",
        letterSpacing: "1px",
        textTransform: "uppercase",
      },
    });
  };

  // Check if product has sizes but none selected
  const hasSizes = product?.sizes && product.sizes.length > 0;
  const sizeNotSelected = hasSizes && !selectedSize;

  if (!product) {
    return (
      <div className={css.productPage}>
        <div className={css.notFound}>
          <h2>PRODUCT NOT FOUND</h2>
          <button
            onClick={() => navigate("/catalog")}
            className={css.backButton}
          >
            BACK TO CATALOG
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={css.productPage}>
      <div className={css.breadcrumb}>
        <button onClick={() => navigate(-1)} className={css.backButton}>
          ← BACK
        </button>
        <span className={css.breadcrumbSeparator}>/</span>
        <span className={css.breadcrumbText}>
          {product.category.toUpperCase()}
        </span>
      </div>

      <div className={css.productContainer}>
        <div className={css.imageSection}>
          <div className={css.imageContainer}>
            <img
              src={product.img || "/images/placeholder-product.jpg"}
              alt={product.name}
              className={css.productImage}
            />
            {!product.available && (
              <div className={css.soldOutOverlay}>SOLD OUT</div>
            )}
          </div>
        </div>

        <div className={css.detailsSection}>
          <div className={css.productHeader}>
            <h1 className={css.productName}>{product.name.toUpperCase()}</h1>
            <p className={css.productReference}>REF. {product.id}</p>
          </div>

          <p className={css.price}>${product.price}</p>

          {product.colors && product.colors.length > 0 && (
            <div className={css.colorSection}>
              <h3 className={css.sectionTitle}>COLOR</h3>
              <div className={css.colorList}>
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={css.colorTag}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasSizes && (
            <div className={css.sizeSection}>
              <h3 className={css.sectionTitle}>
                SIZE{" "}
                {!selectedSize && (
                  <span className={css.optionalText}>(OPTIONAL)</span>
                )}
              </h3>
              <div className={css.sizeList}>
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`${css.sizeTag} ${
                      selectedSize === size ? css.sizeSelected : ""
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="/size-guide" className={css.sizeGuideLink}>
                SIZE GUIDE
              </a>
            </div>
          )}

          <div className={css.availability}>
            <span
              className={`${css.status} ${
                product.available ? css.available : css.unavailable
              }`}
            >
              {product.available ? "IN STOCK" : "SOLD OUT"}
            </span>
          </div>

          <div className={css.actionButtons}>
            <button
              className={`${css.addToCartBtn} ${isInCart ? css.inCart : ""}`}
              onClick={handleAddToCart}
              disabled={!product.available}
            >
              {isInCart ? "REMOVE FROM SHOPPING BAG" : "ADD TO SHOPPING BAG"}
            </button>
            <button
              className={css.buyNowBtn}
              onClick={handleBuyNow}
              disabled={!product.available}
            >
              BUY NOW
            </button>
          </div>

          <div className={css.descriptionSection}>
            <h3 className={css.sectionTitle}>DESCRIPTION</h3>
            <p className={css.description}>{product.description}</p>
          </div>

          <div className={css.productDetails}>
            <div className={css.detailItem}>
              <span className={css.detailLabel}>COMPOSITION</span>
              <span className={css.detailValue}>100% Cotton</span>
            </div>
            <div className={css.detailItem}>
              <span className={css.detailLabel}>CARE</span>
              <span className={css.detailValue}>Machine wash at 30°</span>
            </div>
            <div className={css.detailItem}>
              <span className={css.detailLabel}>BRAND</span>
              <span className={css.detailValue}>{product.brand}</span>
            </div>
          </div>

          <div className={css.featuresSection}>
            <div className={css.feature}>
              <span className={css.featureTitle}>FREE SHIPPING</span>
              <span className={css.featureText}>On orders over $50</span>
            </div>
            <div className={css.feature}>
              <span className={css.featureTitle}>30-DAY RETURNS</span>
              <span className={css.featureText}>Easy returns policy</span>
            </div>
            <div className={css.feature}>
              <span className={css.featureTitle}>SECURE PAYMENT</span>
              <span className={css.featureText}>Your data is protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
