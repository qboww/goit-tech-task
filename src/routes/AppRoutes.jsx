import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const Catalog = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const Cart = lazy(() => import("../pages/CartPage/CartPage"));
const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;