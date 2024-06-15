import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.appContainer}>
      <Navigation />
      <div className={css.content}>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
