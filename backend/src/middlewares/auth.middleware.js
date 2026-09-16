import crypto from 'crypto';
import config from '../config/default.js';

// Telegram WebApp initData ni tekshirish
// https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
function validateInitData(initData) {
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    if (!hash) return null;

    params.delete('hash');
    const dataCheckString = [...params.entries()]
      .map(([k, v]) => `${k}=${v}`)
      .sort()
      .join('\n');

    const secretKey = crypto
      .createHmac('sha256', 'WebAppData')
      .update(config.botToken)
      .digest();

    const computedHash = crypto
      .createHmac('sha256', secretKey)
      .update(dataCheckString)
      .digest('hex');

    if (computedHash !== hash) return null;

    const userRaw = params.get('user');
    return userRaw ? JSON.parse(userRaw) : null;
  } catch (e) {
    return null;
  }
}

// Mijoz API'lari uchun himoya
export const telegramAuth = (req, res, next) => {
  const initData = req.header('X-Telegram-Init-Data');

  if (initData) {
    const user = validateInitData(initData);
    if (user) {
      req.telegramUser = user;
      return next();
    }
  }

  // Development rejimida (brauzerda test qilish uchun) soxta foydalanuvchi
  if (config.env !== 'production') {
    req.telegramUser = {
      id: 999999999,
      first_name: 'Test',
      last_name: 'Mijoz',
    };
    return next();
  }

  return res.status(401).json({ error: 'Ruxsat yo\'q (Telegram tekshiruvi muvaffaqiyatsiz)' });
};
