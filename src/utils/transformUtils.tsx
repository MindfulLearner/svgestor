import { optimize } from 'svgo';
import fs from 'fs/promises';

// optimize the svg file by reading the file and then using optimize from svgo that will use the config.mjs file
async function optimizeSvgFile(filePath: string) {
  const svgData = await fs.readFile(filePath, 'utf8');
  const result = optimize(svgData, { path: filePath, multipass: true });
  return result.data;
}

export default optimizeSvgFile;
