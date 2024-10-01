import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { CreateTranslationDto } from './dto/create-translation.dto';

@Injectable()
export class TranslationService {
    private readonly logger = new Logger(TranslationService.name);
    private jsonData: any;

    constructor() {
        this.loadJsonFile();
    }

    private loadJsonFile() {
        // Define the path to the JSON file
        const basePath = "/mnt/c/Users/zubai/OneDrive/zenesis/playground/translation-microservice";
        const filePath = path.join(basePath, 'src/static/d4b6497d-7d82-4aba-9c15-4d5a9d290c22-description.json');

        try {
            // Load the file synchronously (could also use async if needed)
            const fileContent = fs.readFileSync(filePath, 'utf8');

            // Parse the JSON content
            this.jsonData = JSON.parse(fileContent);

            // Log the loaded JSON
            this.logger.log('Loaded JSON data:', this.jsonData);

        } catch (error) {
            this.logger.error('Error loading JSON file:', error.message);
        }



    }

    getJsonData() {
        return this.jsonData;
    }

}
