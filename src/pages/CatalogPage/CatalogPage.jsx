import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAdvert } from "../../redux/catalog/catalogOps";

import Catalog from "../../components/Catalog/Catalog";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.catalog.catalog.isLoading);
  const hasError = useSelector((state) => state.catalog.catalog.hasError);

  useEffect(() => {
    dispatch(fetchAdvert());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (hasError) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div className="container">
      <Catalog />
    </div>
  );
};

export default CatalogPage;
