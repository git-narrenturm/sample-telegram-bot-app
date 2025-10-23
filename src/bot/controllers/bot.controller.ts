import { Controller, Post, Body, BadRequestException } from '@nestjs/common';

import { BotService } from '../services/bot.service.js';
import { BotConfig } from '../interfaces/bot-config.interface.js';
import { SendMessageDto } from '../dto/send-message.dto.js';

@Controller('bots')
export class BotController {
  constructor(private readonly botService: BotService) {}

  /**
   * creates a new bot
   */
  @Post()
  addBot(@Body() botConfig: BotConfig) {
    try {
      const bot = this.botService.createBot(botConfig);
      return { message: `Bot [${bot.name}] started` };
    } catch (err: unknown) {
      let message = 'Failed to create a bot: unknown error';
      if (err instanceof Error) message = err.message;
      throw new BadRequestException(message);
    }
  }

  /**
   * send message via specific bot
   */
  @Post('send')
  async sendMessage(@Body() message: SendMessageDto) {
    const { botId, chatId, text } = message;

    try {
      await this.botService.sendMessage({ botId, chatId, text });
      return { message: `Message sent via bot "${botId}"` };
    } catch (err: unknown) {
      let message = 'Failed to send a message: unknown error';
      if (err instanceof Error) message = err.message;
      throw new BadRequestException(message);
    }
  }
}
