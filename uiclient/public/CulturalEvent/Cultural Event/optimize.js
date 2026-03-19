import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = __dirname;

const validExtensions = [".jpg", ".jpeg", ".png"];

async function optimizeImages() {

  // STEP 1: Get all image files
  const files = fs.readdirSync(folder)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return validExtensions.includes(ext);
    })
    .sort();

  // STEP 2: Rename images → 1.jpg, 2.jpg...
  let counter = 1;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const oldPath = path.join(folder, file);
    const newName = `${counter}${ext}`;
    const newPath = path.join(folder, newName);

    // skip if already correct name
    if (file !== newName) {
      // avoid overwrite
      if (fs.existsSync(newPath)) {
        fs.unlinkSync(newPath);
      }

      fs.renameSync(oldPath, newPath);
      console.log(`🔁 Renamed: ${file} → ${newName}`);
    }

    counter++;
  }

  // STEP 3: Convert to WEBP
  const renamedFiles = fs.readdirSync(folder)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return validExtensions.includes(ext);
    })
    .sort();

  for (const file of renamedFiles) {
    const inputPath = path.join(folder, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(folder, `${baseName}.webp`);

    try {
      await sharp(inputPath)
        .resize({ width: 800 })
        .webp({ quality: 70 })
        .toFile(outputPath);

      // delete original jpg/png
      fs.unlinkSync(inputPath);

      console.log(`✅ Converted: ${file} → ${baseName}.webp`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err);
    }
  }
}

// RUN
optimizeImages();