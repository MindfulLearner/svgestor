import React from "react";
import { BasicSvgInterface } from "./StaticProps.types";

const ItemGmailSvg: React.FC<BasicSvgInterface> = ({ fill, width, height }) => {
  const [svgPath, setSvgPath] = React.useState<string>("");

  console.log('component loaded');

  React.useEffect(() => {
    const fetchSvg = async () => {
      const response = await fetch('/api/optimized-svg?path=SvgIcon/gmail.svg');
      const optimizedSvg = await response.text();
      setSvgPath(optimizedSvg);
    };
    fetchSvg();
  }, []);

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