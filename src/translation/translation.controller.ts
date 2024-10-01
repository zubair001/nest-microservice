// src/translation/translation.controller.ts
import { Controller, Get } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { CreateTranslationDto } from './dto/create-translation.dto';


@Controller('translation')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get()
  getJsonData() {
    return this.translationService.getJsonData();
  }
}
