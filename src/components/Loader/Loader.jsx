import { RotatingLines } from "react-loader-spinner";
import React from "react";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <RotatingLines
        visible={true}
        height="25"
        width="25"
        color="grey"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
