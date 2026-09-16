import prisma from '../database/connection.js';

export const getAllProducts = () =>
  prisma.product.findMany({ orderBy: { id: 'asc' } });

export const getProductById = (id) =>
  prisma.product.findUnique({ where: { id: Number(id) } });

export const createProduct = (data) =>
  prisma.product.create({
    data: {
      image: data.image,
      name: data.name,
      description: data.description,
      oldPrice: data.oldPrice ? Number(data.oldPrice) : null,
      newPrice: Number(data.newPrice),
      category: data.category,
    },
  });

export const updateProduct = (id, data) =>
  prisma.product.update({
    where: { id: Number(id) },
    data: {
      image: data.image,
      name: data.name,
      description: data.description,
      oldPrice: data.oldPrice ? Number(data.oldPrice) : null,
      newPrice: Number(data.newPrice),
      category: data.category,
    },
  });

export const deleteProduct = (id) =>
  prisma.product.delete({ where: { id: Number(id) } });
