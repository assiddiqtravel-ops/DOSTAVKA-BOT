// Narxni chiroyli formatlash: 45000 -> "45 000 so'm"
export const formatPrice = (n) =>
  Number(n || 0).toLocaleString('ru-RU').replace(/,/g, ' ') + " so'm";

// Chegirma foizi
export const discountPct = (oldPrice, newPrice) =>
  oldPrice && oldPrice > newPrice
    ? Math.round((1 - newPrice / oldPrice) * 100)
    : 0;
