import bot from '../core/bot.js';
import { handleStart, setupMenuButton } from '../controllers/botController.js';

// Bot handlerlarini ro'yxatdan o'tkazish
export const registerBot = () => {
  bot.onText(/\/start/, handleStart);
  setupMenuButton();
  console.log('🤖 Bot ishga tushdi (polling)');
};
