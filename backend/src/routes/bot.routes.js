import bot from '../core/bot.js';
import {
  handleStart,
  setupMenuButton,
  handleCallback,
  handleChatId,
  handleAddedToGroup,
} from '../controllers/botController.js';

// Bot handlerlarini ro'yxatdan o'tkazish
export const registerBot = () => {
  bot.onText(/\/start/, handleStart);
  bot.onText(/\/id/, handleChatId); // chat ID'ni bilish uchun
  bot.on('callback_query', handleCallback); // "Men olaman" tugmasi
  bot.on('new_chat_members', handleAddedToGroup); // guruhga qo'shilganda ID
  setupMenuButton();
  console.log('🤖 Bot ishga tushdi (polling)');
};
