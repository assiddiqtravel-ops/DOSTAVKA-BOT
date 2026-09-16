import { getInitData } from './telegram.js';

const headers = () => ({
  'Content-Type': 'application/json',
  'X-Telegram-Init-Data': getInitData(),
});

export const getProducts = () =>
  fetch('/api/products', { headers: headers() }).then((r) => r.json());

export const createOrder = (data) =>
  fetch('/api/orders', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(data),
  }).then((r) => r.json());

export const getMyOrders = () =>
  fetch('/api/orders/my', { headers: headers() }).then((r) => r.json());
