import fs from 'fs/promises';
import { optimize } from 'svgo';

/**
 * optimize the svg file by reading the file and then using optimize from svgo that will use the svgo.config.mjs file
 */
async function optimizeSvgFile(filePath: string): Promise<string> {
  //TODO: adjust promises to run pnpm run build
  const svgData = await fs.readFile(filePath, 'utf8');
  const result = optimize(svgData, { path: filePath, multipass: true });
  return result.data;
}

export default optimizeSvgFile;
