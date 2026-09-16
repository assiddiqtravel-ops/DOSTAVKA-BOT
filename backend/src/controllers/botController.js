import bot from '../core/bot.js';
import config from '../config/default.js';

// /start komandasi
export const handleStart = async (msg) => {
  const chatId = msg.chat.id;
  const name = msg.from.first_name || "Do'st";

  const text =
    `Assalomu alaykum, ${name}! 🍔\n\n` +
    `Elif Fast Food'ga xush kelibsiz. Mazali, issiqqina taomlarni tez va oson buyurtma qiling.\n\n` +
    `Buyurtma berish uchun pastdagi tugmani bosing 👇`;

  const options = config.miniAppUrl
    ? {
        reply_markup: {
          inline_keyboard: [
            [{ text: '🍔 Buyurtma berish', web_app: { url: config.miniAppUrl } }],
          ],
        },
      }
    : {};

  // sendMessage'ni xavfsiz yuboramiz (masalan, foydalanuvchi botni bloklasa
  // 403 xatosi jarayonni o'chirib yubormasligi uchun)
  const message = config.miniAppUrl
    ? [text, options]
    : [text + "\n\n⚠️ Mini App hali ulanmagan (MINI_APP_URL bo'sh)."];

  bot
    .sendMessage(chatId, ...message)
    .catch((e) => console.log('sendMessage xato:', e.message));
};

// Botning pastki "menu" tugmasini Mini App'ga ulash
export const setupMenuButton = async () => {
  if (!config.miniAppUrl) return;
  try {
    await bot.setChatMenuButton({
      menu_button: {
        type: 'web_app',
        text: 'Buyurtma 🍕',
        web_app: { url: config.miniAppUrl },
      },
    });
    console.log('✅ Menu tugmasi Mini App\'ga ulandi');
  } catch (e) {
    console.log('Menu tugmasi xatosi:', e.message);
  }
};

// Buyurtma tasdiqlanganda mijozga xabar yuborish
export const sendOrderConfirmation = (telegramId) => {
  bot
    .sendMessage(
      telegramId,
      "Buyurtmangiz muvaffaqiyatli qabul qilindi! Kuryerimiz tez orada bog'lanadi 🍔",
    )
    .catch((e) => console.log('Xabar yuborishda xato:', e.message));
};
