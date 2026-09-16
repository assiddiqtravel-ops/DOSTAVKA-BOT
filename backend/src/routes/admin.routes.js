import { Router } from 'express';
import {
  listProducts,
  addProduct,
  editProduct,
  removeProduct,
  listOrders,
  changeOrderStatus,
} from '../controllers/adminController.js';

const router = Router();

// Mahsulotlar (CRUD)
router.get('/products', listProducts);
router.post('/products', addProduct);
router.put('/products/:id', editProduct);
router.delete('/products/:id', removeProduct);

// Buyurtmalar
router.get('/orders', listOrders);
router.patch('/orders/:id', changeOrderStatus);

export default router;
