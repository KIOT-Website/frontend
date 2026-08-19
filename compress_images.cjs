const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'Faculity', 'cse');
const filesToCompress = [
  'Dr.RMANIKANDAN.png',
  'Mr.T.PALANIRAJA.png',
  'Mrs.S.MANJU.png',
  'P.R.Karthik.png'
];

async function compressImages() {
  for (const file of filesToCompress) {
    const inputPath = path.join(dir, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`File not found: ${inputPath}`);
      continue;
    }
    
    // Convert to webp with quality 80
    const outputPath = path.join(dir, file.replace('.png', '.webp'));
    console.log(`Compressing ${file} to ${path.basename(outputPath)}...`);
    
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Successfully compressed ${file}`);
      
      // Delete original png
      fs.unlinkSync(inputPath);
      console.log(`Deleted original ${file}`);
    } catch (err) {
      console.error(`Error compressing ${file}:`, err);
    }
  }
}

compressImages();
