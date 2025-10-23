import dotenv from 'dotenv';
import { BotConfig } from '../interfaces/bot-config.interface.js';

dotenv.config();

export const DEFAULT_BOTS: BotConfig[] = [
  {
    id: '85365511-b261-43c6-9bfc-1824f754d856',
    name: 'sample-telegram-bot',
    token: process.env.BOT_TOKEN_1!,
  },
  {
    id: '54be2a4f-e666-4476-9c5c-95dd49c187bb',
    name: 'sample-telegram-bot2',
    token: process.env.BOT_TOKEN_2!,
  },
];
