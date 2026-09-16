import prisma from '../database/connection.js';

export const createOrder = ({ userId, items, total, location, phone }) =>
  prisma.order.create({
    data: {
      userId,
      items,
      total: Number(total),
      location: location || null,
      phone: phone || null,
    },
  });

// Admin uchun: barcha buyurtmalar (mijoz ma'lumoti bilan)
export const getAllOrders = () =>
  prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true },
  });

// Mijozning o'z buyurtmalari
export const getOrdersByUser = (userId) =>
  prisma.order.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

export const updateOrderStatus = (id, status) =>
  prisma.order.update({
    where: { id: Number(id) },
    data: { status },
  });
