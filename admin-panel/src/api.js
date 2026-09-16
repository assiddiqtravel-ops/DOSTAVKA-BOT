const json = (r) => {
  if (r.status === 401) {
    // Parol noto'g'ri yoki muddati tugagan — login sahifasiga qaytaramiz
    localStorage.removeItem('adminPass');
    window.location.reload();
    throw new Error('unauthorized');
  }
  return r.json();
};

const H = () => ({
  'Content-Type': 'application/json',
  'X-Admin-Password': localStorage.getItem('adminPass') || '',
});

// Parolni tekshirish (login uchun)
export const checkPassword = (pw) =>
  fetch('/api/admin/products', {
    headers: { 'X-Admin-Password': pw },
  }).then((r) => r.ok);

// Buyurtmalar
export const getOrders = () => fetch('/api/admin/orders', { headers: H() }).then(json);
export const setOrderStatus = (id, status) =>
  fetch(`/api/admin/orders/${id}`, {
    method: 'PATCH',
    headers: H(),
    body: JSON.stringify({ status }),
  }).then(json);

// Mahsulotlar (CRUD)
export const getProducts = () => fetch('/api/admin/products', { headers: H() }).then(json);
export const addProduct = (data) =>
  fetch('/api/admin/products', {
    method: 'POST',
    headers: H(),
    body: JSON.stringify(data),
  }).then(json);
export const updateProduct = (id, data) =>
  fetch(`/api/admin/products/${id}`, {
    method: 'PUT',
    headers: H(),
    body: JSON.stringify(data),
  }).then(json);
export const deleteProduct = (id) =>
  fetch(`/api/admin/products/${id}`, { method: 'DELETE', headers: H() }).then(json);
