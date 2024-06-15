import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvert } from "../../redux/catalog/catalogSlice";
import {
  selectCatalogItems,
  selectIsLoading,
  selectHasError,
} from "../../redux/catalog/catalogSlice";
import Filters from "../../components/Filters/Filters";
import Catalog from "../../components/Catalog/Catalog";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCatalogItems);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const [filteredItems, setFilteredItems] = useState([]);
  const [allFilteredItems, setAllFilteredItems] = useState([]);
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(fetchAdvert());
  }, [dispatch]);

  useEffect(() => {
    if (items.length) {
      const uniqueBrands = [...new Set(items.map((car) => car.make))];
      setBrands(uniqueBrands);

      const uniquePrices = [
        ...new Set(
          items.map((car) => parseInt(car.rentalPrice.replace(/\D/g, ""), 10))
        ),
      ].sort((a, b) => a - b);
      setPrices(uniquePrices);

      applyFilters(filters, items);
    }
  }, [items]);

  useEffect(() => {
    applyFilters(filters, items);
  }, [filters, items, page]);

  const applyFilters = (filters, items) => {
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

    setAllFilteredItems(filtered);
    setFilteredItems(filtered.slice(0, page * 12));
  };

  const handleSearch = (filters) => {
    setFilters(filters);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const allItemsLoaded = filteredItems.length >= allFilteredItems.length;

  if (isLoading && page === 1) {
    return <Loader />;
  }

  if (hasError) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div className="container">
      <Filters onSearch={handleSearch} brands={brands} prices={prices} />
      {filteredItems.length > 0 ? (
        <>
          <Catalog items={filteredItems} />
          {!allItemsLoaded && (
            <div className={css.btnContainer}>
              <button className={css.loadMore} onClick={loadMore}>
                Load more
              </button>
            </div>
          )}
        </>
      ) : (
        <p>No cars found</p>
      )}
    </div>
  );
};

export default CatalogPage;
