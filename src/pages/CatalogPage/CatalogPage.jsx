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
    return (
      <div className="container">
        <div className={css.errorContainer}>
          <p className={css.errorText}>SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container"> {/* Add container here */}
      <div className={css.catalogPage}>
        <div className={css.catalogHeader}>
          <h1 className={css.pageTitle}>PRODUCTS</h1>
          <p className={css.pageSubtitle}>{items.length} ITEMS</p>
        </div>

        {displayedItems.length > 0 ? (
          <>
            <Catalog items={displayedItems} />
            {!allItemsLoaded && (
              <div className={css.loadMoreContainer}>
                <button className={css.loadMore} onClick={loadMore}>
                  LOAD MORE
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={css.emptyCatalog}>
            <p className={css.notFound}>NO PRODUCTS FOUND</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;