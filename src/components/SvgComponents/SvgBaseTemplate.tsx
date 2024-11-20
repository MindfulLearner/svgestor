import React from "react";
import alien from "SvgIcon/alien.optimized.svg";
import { BasicSvgInterface } from "./StaticProps.types";
const SvgBaseTemplate: React.FC<BasicSvgInterface> = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <path
        d={svgPath}
        fill={fill}
      />
    </svg>
  );
};

export default ItemGmailSvg;