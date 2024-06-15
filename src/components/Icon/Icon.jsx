import React from "react";
import Icons from "../../assets/icons.svg";

const Icon = ({ id, className, width, height, onClick }) => {
  return (
    <svg className={className} width={width} height={height} onClick={onClick}>
      <use href={`${Icons}#${id}`} />
    </svg>
  );
};

export default Icon;
