const json = (r) => r.json();
const H = { 'Content-Type': 'application/json' };

// Buyurtmalar
export const getOrders = () => fetch('/api/admin/orders').then(json);
export const setOrderStatus = (id, status) =>
  fetch(`/api/admin/orders/${id}`, {
    method: 'PATCH',
    headers: H,
    body: JSON.stringify({ status }),
  }).then(json);

// Mahsulotlar (CRUD)
export const getProducts = () => fetch('/api/admin/products').then(json);
export const addProduct = (data) =>
  fetch('/api/admin/products', {
    method: 'POST',
    headers: H,
    body: JSON.stringify(data),
  }).then(json);
export const updateProduct = (id, data) =>
  fetch(`/api/admin/products/${id}`, {
    method: 'PUT',
    headers: H,
    body: JSON.stringify(data),
  }).then(json);
export const deleteProduct = (id) =>
  fetch(`/api/admin/products/${id}`, { method: 'DELETE' }).then(json);
