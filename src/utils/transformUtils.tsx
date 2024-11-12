import { optimize } from 'svgo';
import fs from 'fs';

// optimize the svg file by reading the file and then using optimize from svgo that will use the config.mjs file
async function optimizeSvgFile(filePath: string) {
//TODO: adjust promises to run pnpm run build
  const svgData = await fs.promises.readFile(filePath, 'utf8');
  const result = optimize(svgData, { path: filePath, multipass: true });
  return result.data;
}

export default optimizeSvgFile;
