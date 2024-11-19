import fs from 'fs/promises';
import { optimize } from 'svgo';

/**
 * optimize the svg file by reading the file and then using optimize from svgo that will use the svgo.config.mjs file
 */
async function optimizeSvgFile(filePath) {
  try {
    const svgData = await fs.readFile(filePath, 'utf8');
    const result = optimize(svgData, { path: filePath, multipass: true });
    console.log(result);
    return result.data;
  } catch (error) {
    console.error(error);
    return '';
  }
}

export default optimizeSvgFile;
