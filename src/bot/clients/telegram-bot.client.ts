import TelegramBot from 'node-telegram-bot-api';

import { DEFAULT_RESPONSES } from '../config/bot.responses.js';

/**
 * A wrapper for external lib to initialize and manage Telegram Bot instance
 */
export class TelegramBotClient {
  private readonly bot: TelegramBot;

  constructor(
    private readonly id: string,
    public readonly name: string,
    private readonly token: string,
  ) {
    this.id = id;
    this.name = name;
    this.token = token;
    this.bot = new TelegramBot(this.token, { polling: true });
  }

  public start(): void {
    console.log(`Bot [${this.name}] starting`);
    this.bot.on('message', (msg) => this.handleMessage(msg));
  }

  private async handleMessage(msg: TelegramBot.Message): Promise<void> {
    const chatId = msg.chat.id;
    const text = msg.text;

    console.log(
      `Bot [${this.name}] received from chat [${chatId}] an message: ${text}`,
    );

    const reply =
      DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)];
    await this.bot.sendMessage(chatId, reply);
  }

  public async sendMessage(chatId: number, text: string): Promise<void> {
    await this.bot.sendMessage(chatId, text);
  }
}
