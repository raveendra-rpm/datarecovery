const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicImagesDir = path.join(__dirname, '../public/images');

function getAllFiles(dir, extArray) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(file, extArray));
        } else {
            const ext = path.extname(file).toLowerCase();
            if (extArray.includes(ext)) {
                results.push(file);
            }
        }
    });
    return results;
}

const images = getAllFiles(publicImagesDir, ['.jpg', '.jpeg', '.png', '.webp']);
let totalOriginalSize = 0;
let totalNewSize = 0;

async function processImages() {
    console.log(`Found ${images.length} images to compress.`);

    for (const imgPath of images) {
        const ext = path.extname(imgPath).toLowerCase();
        const stat = fs.statSync(imgPath);
        totalOriginalSize += stat.size;
        
        // Output path is temporary, then we replace original
        const tempPath = imgPath + '.tmp';
        
        try {
            const fileBuffer = fs.readFileSync(imgPath);
            let s = sharp(fileBuffer);
            
            if (ext === '.jpg' || ext === '.jpeg') {
                s = s.jpeg({ quality: 82, mozjpeg: true });
            } else if (ext === '.png') {
                s = s.png({ compressionLevel: 8, adaptiveFiltering: true });
            } else if (ext === '.webp') {
                s = s.webp({ quality: 85 });
            }

            await s.toFile(tempPath);
            
            const newStat = fs.statSync(tempPath);
            totalNewSize += newStat.size;
            
            // Replace original with compressed file
            fs.renameSync(tempPath, imgPath);
            console.log(`Compressed: ${path.basename(imgPath)}`);
        } catch (err) {
            console.error(`Error processing ${imgPath}:`, err);
            if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
    }
    
    console.log('--- COMPRESSION COMPLETE ---');
    console.log(`Original Size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`New Size: ${(totalNewSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Saved: ${((totalOriginalSize - totalNewSize) / (1024 * 1024)).toFixed(2)} MB`);
}

processImages();
