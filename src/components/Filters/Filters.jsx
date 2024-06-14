// src/components/Filters/Filters.js
import React, { useState } from "react";
import css from "./Filters.module.css";

const Filters = ({ onSearch, brands, prices }) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleSearch = () => {
    onSearch({ brand, price, mileageFrom, mileageTo });
  };

  return (
    <div className={css.filtersContainer}>
      <div className={css.filter}>
        <label>Car brand</label>
        <select
          className={css.selectBrand}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Enter the text</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className={css.filter}>
        <label>Price / hour</label>
        <select
          className={css.selectPrice}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">To $</option>
          {prices.map((price, index) => (
            <option key={index} value={price}>
              ${price}
            </option>
          ))}
        </select>
      </div>
      <div className={css.filter}>
        <label>Car mileage / km</label>
        <div className={css.inputs}>
          <input
            className={css.inputFrom}
            type="number"
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
          />
          <input
            className={css.inputTo}
            type="number"
            placeholder="To"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
          />
        </div>
      </div>
      <button className={css.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
