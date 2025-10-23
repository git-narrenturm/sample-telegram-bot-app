import dotenv from 'dotenv';
import { BotConfig } from '../interfaces/bot-config.interface.js';

dotenv.config();

export const DEFAULT_BOTS: BotConfig[] = [
  {
    id: '85365511-b261-43c6-9bfc-1824f754d856',
    name: 'sample-telegram-bot',
    token: process.env.BOT_TOKEN_1!,
  },
];
