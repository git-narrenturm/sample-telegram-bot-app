import { Injectable, OnModuleInit } from '@nestjs/common';
import { BotService } from './bot.service.js';
import { DEFAULT_BOTS } from '../config/bot.config.js';

@Injectable()
export class BotInitializer implements OnModuleInit {
  constructor(private botService: BotService) {}

  onModuleInit() {
    this.initializeDefaultBots();
  }

  private initializeDefaultBots() {
    for (const botConfig of DEFAULT_BOTS) {
      this.botService.createBot(botConfig);
    }
  }
}
