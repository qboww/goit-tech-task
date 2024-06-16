import React from "react";

const Icon = ({ id, width, height, className, onClick }) => (
  <svg
    className={className}
    onClick={onClick}
    width={width}
    height={height}
    aria-hidden="true"
  >
    <use xlinkHref={`#${id}`} />
  </svg>
);

export default Icon;
