import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const projectsDir = './public/projects';

// Ensure the output directory exists
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.png'));

console.log(`Found ${files.length} PNG files to optimize...`);

Promise.all(files.map(file => {
  const inputPath = path.join(projectsDir, file);
  const outputPath = path.join(projectsDir, file.replace('.png', '.webp'));
  
  console.log(`Converting: ${file} -> ${file.replace('.png', '.webp')}`);
  
  return sharp(inputPath)
    .webp({ quality: 80, effort: 6 })
    .toFile(outputPath)
    .then(info => {
      const originalSize = fs.statSync(inputPath).size;
      const newSize = info.size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      console.log(`✓ ${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    })
    .catch(err => {
      console.error(`✗ Error processing ${file}:`, err.message);
    });
}))
.then(() => {
  console.log('\nImage optimization complete!');
  console.log('Remember to update ProjectsSection.jsx to use .webp files');
})
.catch(err => {
  console.error('Error during batch processing:', err);
  process.exit(1);
});
