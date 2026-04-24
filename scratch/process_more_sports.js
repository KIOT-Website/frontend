import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const baseDir = 'c:/KIOT-2/frontend/src/assets/sports';

const tasks = [
    {
        oldFolder: 'OPEN TOURNAMENT FACULTY ACHIEVEMENT & PARTICIPATION',
        newFolder: 'open_tournament_faculty',
        prefix: 'open-faculty-'
    },
    {
        oldFolder: 'OPEN TOURNAMENT INTERNATIONAL LEVEL',
        newFolder: 'open_tournament_international',
        prefix: 'international-'
    }
];

async function processTasks() {
    for (const task of tasks) {
        const inputPath = path.join(baseDir, task.oldFolder);
        const outputPath = path.join(baseDir, task.newFolder);

        if (!fs.existsSync(inputPath)) {
            console.log(`Folder not found: ${task.oldFolder}`);
            continue;
        }

        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath);
        }

        const files = fs.readdirSync(inputPath).filter(file => 
            ['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())
        );

        console.log(`Processing ${files.length} images in ${task.oldFolder}...`);

        for (let i = 0; i < files.length; i++) {
            const inputFile = path.join(inputPath, files[i]);
            const outputName = `${task.prefix}${i + 1}.webp`;
            const outputFile = path.join(outputPath, outputName);

            await sharp(inputFile)
                .webp({ quality: 80 })
                .toFile(outputFile);
            
            console.log(`Created ${outputName}`);
        }

        // Clean up old folder if it's different from new folder
        if (task.oldFolder !== task.newFolder) {
            fs.rmSync(inputPath, { recursive: true, force: true });
            console.log(`Removed old folder: ${task.oldFolder}`);
        }
    }
    console.log('All tasks complete!');
}

processTasks();
