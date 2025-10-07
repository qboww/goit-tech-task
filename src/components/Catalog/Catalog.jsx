import React from "react";
import Card from "../Card/Card";
import css from "./Catalog.module.css";

const Catalog = ({ items }) => {
  return (
    <div className={css.catalogContainer}>
      <ul className={css.cardsList}>
        {items.map((item) => (
          <Card key={item.id} item={item} /> 
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
