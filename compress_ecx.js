import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'src/assets/be-ecx');

async function compressImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.webp')) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      
      console.log(`Compressing ${file}...`);
      
      try {
        if (file.endsWith('.png')) {
          await sharp(filePath).png({ quality: 75, compressionLevel: 9, palette: true }).toFile(tempPath);
        } else if (file.endsWith('.webp')) {
          await sharp(filePath).webp({ quality: 75 }).toFile(tempPath);
        } else {
          await sharp(filePath).jpeg({ quality: 75 }).toFile(tempPath);
        }
        
        const originalSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(tempPath).size;
        
        fs.renameSync(tempPath, filePath);
        console.log(`Successfully compressed ${file}: ${(originalSize/1024).toFixed(2)} KB -> ${(newSize/1024).toFixed(2)} KB`);
      } catch (err) {
        console.error(`Error compressing ${file}:`, err);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    }
  }
}

compressImages();
