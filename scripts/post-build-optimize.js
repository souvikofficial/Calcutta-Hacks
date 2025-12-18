import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '../src');
const EXTENSIONS_TO_REPLACE = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];
const SOURCE_FILE_EXTENSIONS = ['.jsx', '.js', '.tsx', '.ts', '.css', '.scss', '.json'];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function run() {
  console.log('Starting post-build optimization...');
  
  const allFiles = getAllFiles(SRC_DIR);
  
  // 1. Identify WebP files and their legacy counterparts
  const webpFiles = allFiles.filter(file => file.endsWith('.webp'));
  const migrationMap = new Map(); // oldPath -> newPath

  webpFiles.forEach(webpPath => {
    const dir = path.dirname(webpPath);
    const webpName = path.basename(webpPath, '.webp');
    
    EXTENSIONS_TO_REPLACE.forEach(ext => {
      // Check for exact match: image.png -> image.webp
      let legacyPath = path.join(dir, webpName + ext);
      if (fs.existsSync(legacyPath)) {
        migrationMap.set(legacyPath, webpPath);
      } else {
        // Check for normalized match: image name.png -> image-name.webp
        // We need to find if there is any file in the dir that normalizes to webpName
        const filesInDir = fs.readdirSync(dir);
        const potentialLegacy = filesInDir.find(f => {
            const fName = path.basename(f, path.extname(f));
            return f.endsWith(ext) && normalizeName(fName) === webpName;
        });
        
        if (potentialLegacy) {
             migrationMap.set(path.join(dir, potentialLegacy), webpPath);
        }
      }
    });
  });

  if (migrationMap.size === 0) {
    console.log('No legacy images found to replace.');
    return;
  }

  console.log(`Found ${migrationMap.size} images to migrate.`);

  // 2. Update source code references
  const sourceFiles = allFiles.filter(file => 
    SOURCE_FILE_EXTENSIONS.includes(path.extname(file))
  );

  let updatedFilesCount = 0;

  sourceFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    migrationMap.forEach((webpPath, legacyPath) => {
      const legacyName = path.basename(legacyPath);
      const webpName = path.basename(webpPath);
      
      // Replace exact filename
      if (content.includes(legacyName)) {
        const regex = new RegExp(legacyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        content = content.replace(regex, webpName);
        hasChanges = true;
      }
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated references in: ${path.relative(SRC_DIR, filePath)}`);
      updatedFilesCount++;
    }
  });

  console.log(`Updated references in ${updatedFilesCount} files.`);

  // 3. Delete legacy files
  let deletedCount = 0;
  migrationMap.forEach((webpPath, legacyPath) => {
    try {
      if (fs.existsSync(legacyPath)) {
        fs.unlinkSync(legacyPath);
        deletedCount++;
        console.log(`Deleted: ${path.relative(SRC_DIR, legacyPath)}`);
      }
    } catch (err) {
      console.error(`Error deleting ${legacyPath}:`, err);
    }
  });

  console.log(`Deleted ${deletedCount} legacy image files.`);
  console.log('Optimization complete.');
}

run();
