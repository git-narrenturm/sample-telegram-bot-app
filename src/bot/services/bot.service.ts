import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { BotConfig } from '../interfaces/bot-config.interface.js';
import { TelegramBotClient } from '../entities/telegram-bot-client.entity.js';

import { SendMessageDto } from '../dto/send-message.dto.js';

@Injectable()
export class BotService {
  private bots: Map<string, TelegramBotClient> = new Map();

  public createBot(botConfig: BotConfig) {
    if (this.bots.has(botConfig.id)) {
      throw new BadRequestException(
        `Failed to create: Bot [${botConfig.id}] already exists`,
      );
    }

    const bot = new TelegramBotClient(
      botConfig.id,
      botConfig.name,
      botConfig.token,
    );

    bot.start();

    this.bots.set(botConfig.id, bot);

    return bot;
  }

  public async sendMessage(message: SendMessageDto): Promise<boolean> {
    const bot = this.bots.get(message.botId);
    if (!bot) {
      throw new NotFoundException(`Bot [${message.botId}] not found`);
    }

    try {
      await bot.sendMessage(message.chatId, message.text);
      return true;
    } catch (err) {
      console.error(`Failed to send message via bot "${message.botId}":`, err);
      return false;
    }
  }
}
