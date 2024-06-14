import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Catalog = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const Favorites = lazy(() => import("../pages/FavoritesPage/FavoritesPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
