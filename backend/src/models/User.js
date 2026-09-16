import prisma from '../database/connection.js';

// Mijozni topish yoki yaratish (telegramId bo'yicha)
export const findOrCreateUser = async ({ telegramId, name, phone }) => {
  return prisma.user.upsert({
    where: { telegramId: String(telegramId) },
    update: {
      name,
      ...(phone ? { phone } : {}),
    },
    create: {
      telegramId: String(telegramId),
      name,
      phone: phone || null,
    },
  });
};

export const getUserByTelegramId = (telegramId) =>
  prisma.user.findUnique({ where: { telegramId: String(telegramId) } });
