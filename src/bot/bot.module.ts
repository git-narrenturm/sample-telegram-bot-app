import { Module } from '@nestjs/common';
import { BotService } from './services/bot.service.js';
import { BotController } from './controllers/bot.controller.js';
import { BotInitializer } from './services/bot.initializer.js';

@Module({
  providers: [BotService, BotInitializer],
  controllers: [BotController],
})
export class BotModule {}
