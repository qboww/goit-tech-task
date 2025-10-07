import React from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import SVGSymbols from "./components/SVGSymbols/SVGSymbols";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.appContainer}>
      <SVGSymbols />
      <Navigation />
      <div className={css.content}>
        <AppRoutes />
      </div>
      <Footer />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#000",
            color: "#fff",
            borderRadius: "0",
            fontSize: "11px",
            letterSpacing: "1px",
            textTransform: "uppercase",
          },
        }}
      />
    </div>
  );
};

export default App;
