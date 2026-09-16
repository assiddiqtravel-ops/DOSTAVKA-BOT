import { Router } from 'express';
import { adminAuth } from '../middlewares/auth.middleware.js';
import {
  listProducts,
  addProduct,
  editProduct,
  removeProduct,
  listOrders,
  changeOrderStatus,
} from '../controllers/adminController.js';

const router = Router();

// Barcha admin yo'llari parol bilan himoyalanadi
router.use(adminAuth);

// Mahsulotlar (CRUD)
router.get('/products', listProducts);
router.post('/products', addProduct);
router.put('/products/:id', editProduct);
router.delete('/products/:id', removeProduct);

// Buyurtmalar
router.get('/orders', listOrders);
router.patch('/orders/:id', changeOrderStatus);

export default router;
