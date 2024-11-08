// interfaces for svg components

/**
 * basic svg interface width and height and fillcolor
 */
interface BasicSvgInterface {
    width: number;
    height: number;
    fillColor: string;
}

/**
 * styled svg interface with style prop, to refactor and make different svg components style types
 */
interface StyledSvgInterface extends BasicSvgInterface {
  style?: React.CSSProperties;
}