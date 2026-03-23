import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'e:/Kiot/frontend/src/assets';

async function convert() {
  const files = fs.readdirSync(assetsDir);
  const images = files.filter(f => /\.(png|jpe?g)$/i.test(f));
  
  console.log(`Found ${images.length} images to convert...`);
  
  for (const img of images) {
    const inputPath = path.join(assetsDir, img);
    const outputPath = path.join(assetsDir, img.replace(/\.(png|jpe?g)$/i, '.webp'));
    
    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      console.log(`Converted: ${img} -> ${path.basename(outputPath)}`);
      // Optional: Delete the original
      // fs.unlinkSync(inputPath);
    } catch (err) {
      console.error(`Failed to convert ${img}:`, err);
    }
  }
}

convert();
