import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvert } from "../../redux/catalog/catalogOps";
import {
  selectCatalogItems,
  selectIsLoading,
  selectHasError,
} from "../../redux/catalog/catalogSelectors";
import Catalog from "../../components/Catalog/Catalog";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCatalogItems);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdvert());
  }, [dispatch]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const displayedItems = items.slice(0, page * 12);
  const allItemsLoaded = displayedItems.length >= items.length;

  if (isLoading && page === 1) {
    return <Loader />;
  }

  if (hasError) {
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div className="container">
      {displayedItems.length > 0 ? (
        <>
          <Catalog items={displayedItems} />
          {!allItemsLoaded && (
            <div className={css.btnContainer}>
              <button className={css.loadMore} onClick={loadMore}>
                Load more
              </button>
            </div>
          )}
        </>
      ) : (
        <p className={css.notFound}>No cars found...</p>
      )}
    </div>
  );
};

export default CatalogPage;