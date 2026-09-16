export const formatPrice = (n) =>
  Number(n || 0).toLocaleString('ru-RU').replace(/,/g, ' ') + " so'm";

export const formatDate = (d) =>
  new Date(d).toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
