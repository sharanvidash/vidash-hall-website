const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const FAVICON_SIZES = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateFavicons() {
  const inputImage = path.join(__dirname, '../public/images/logo.png');
  const outputDir = path.join(__dirname, '../public/favicon');

  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Generate different sizes
    for (const [filename, size] of Object.entries(FAVICON_SIZES)) {
      await sharp(inputImage)
        .resize(size, size)
        .toFile(path.join(outputDir, filename));
      
      console.log(`Generated ${filename}`);
    }

    // Generate ICO file
    await sharp(inputImage)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('Generated favicon.ico');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 