import TelegramBot from 'node-telegram-bot-api';
import config from '../config/default.js';

// Bot instansiyasini yaratish (polling rejimida)
const bot = new TelegramBot(config.botToken, { polling: true });

bot.on('polling_error', (err) => {
  console.error('Polling xatosi:', err.message);
});

export default bot;
