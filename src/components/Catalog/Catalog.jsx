// src/components/Catalog/Catalog.js
import React from "react";
import Card from "../Card/Card";
import css from "./Catalog.module.css";

const Catalog = ({ items }) => {
  return (
    <div>
      <div className={css.catalogContainer}>
        <ul className={css.cardsList}>
          {items.map((car) => (
            <li key={car.id}>
              <Card car={car} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
