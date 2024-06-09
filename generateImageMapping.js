const fs = require('fs');
const path = require('path');

// Directory where your images are stored
const imgDir = path.join(__dirname, 'public', 'img_stock');

// Function to generate the image mapping
const generateImageMapping = (directory) => {
  const files = fs.readdirSync(directory);
  const mapping = {};

  files.forEach(file => {
    const designCode = path.parse(file).name;
    const extension = path.parse(file).ext.toLowerCase();
    // Ensure the file is an image
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(extension)) {
      mapping[designCode] = `/img_stock/${file}`;
    }
  });

  return mapping;
};

// Generate the mapping
const imageMapping = generateImageMapping(imgDir);

// Output the mapping to a file
const outputFilePath = path.join(__dirname, 'src', 'components', 'imageMapping.js');
const outputContent = `export const imageMapping = ${JSON.stringify(imageMapping, null, 2)};\n`;

fs.writeFileSync(outputFilePath, outputContent, 'utf8');

console.log('Image mapping generated successfully.');
