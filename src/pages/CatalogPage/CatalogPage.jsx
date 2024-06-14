// src/pages/Catalog/Catalog.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvert } from "../../redux/catalog/catalogOps";
import {
  selectCatalogItems,
  selectIsLoading,
  selectHasError,
} from "../../redux/catalog/catalogSlice";
import Filters from "../../components/Filters/Filters";
import Catalog from "../../components/Catalog/Catalog";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCatalogItems);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const [filteredItems, setFilteredItems] = useState([]);
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    dispatch(fetchAdvert());
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(items);
    // Extract unique car brands
    const uniqueBrands = [...new Set(items.map((car) => car.make))];
    setBrands(uniqueBrands);

    // Extract, clean, and sort unique prices as integers
    const uniquePrices = [
      ...new Set(
        items.map((car) => parseInt(car.rentalPrice.replace(/\D/g, ""), 10))
      ),
    ].sort((a, b) => a - b);
    setPrices(uniquePrices);
  }, [items]);

  const handleSearch = (filters) => {
    let filtered = items;
    if (filters.brand) {
      filtered = filtered.filter((car) =>
        car.make.toLowerCase().includes(filters.brand.toLowerCase())
      );
    }

    if (filters.price) {
      const maxPrice = parseInt(filters.price, 10);
      filtered = filtered.filter(
        (car) => parseInt(car.rentalPrice.replace(/\D/g, ""), 10) <= maxPrice
      );
    }

    if (filters.mileageFrom) {
      const minMileage = parseInt(filters.mileageFrom, 10);
      filtered = filtered.filter((car) => car.mileage >= minMileage);
    }

    if (filters.mileageTo) {
      const maxMileage = parseInt(filters.mileageTo, 10);
      filtered = filtered.filter((car) => car.mileage <= maxMileage);
    }

    setFilteredItems(filtered);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (hasError) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div className="container">
      <Filters onSearch={handleSearch} brands={brands} prices={prices} />
      <Catalog items={filteredItems} />
    </div>
  );
};

export default CatalogPage;
