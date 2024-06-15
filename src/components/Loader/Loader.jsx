import { RotatingLines } from "react-loader-spinner";
import React from "react";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="#3470ff"
        strokeColor="#3470ff"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
