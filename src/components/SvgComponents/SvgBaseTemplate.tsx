import React from "react";
import { BasicSvgInterface } from "./StaticProps.types";
// utilize function from utils to optimize the svg
import optimizeSvgFile from "../../utils/transformUtils.js";

const ItemGmailSvg: React.FC<BasicSvgInterface> = ({ fill, width, height }) => {
  //define the state for the svg path
  const [svgPath, setSvgPath] = React.useState<string>("");

  console.log('component loaded');

  // fetch svg and call getOptimizedSvg
  React.useEffect(() => {
    const fetchSvg = async () => {
      const optimizedSvg = await getOptimizedSvg("public/SvgIcon/gmail.svg");
      setSvgPath(optimizedSvg);
    };
    fetchSvg();
  }, []);

  // get optimized svg will call the optimizeSvgFile function
  async function getOptimizedSvg(path: string): Promise<string> {
    const optimizedSvg = await optimizeSvgFile(path);
    return optimizedSvg;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      {/* use effect will fetch the svg and set the state for the svg path */}
      <path d={svgPath} fill={fill} />
    </svg>
  );
};

export default ItemGmailSvg;