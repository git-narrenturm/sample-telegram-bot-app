import { Module } from '@nestjs/common';
import { BotModule } from './bot/bot.module.js';

@Module({
  imports: [BotModule],
})
export class AppModule {}
