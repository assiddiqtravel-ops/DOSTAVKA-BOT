// Telegram WebApp bilan ishlash uchun yordamchi funksiyalar
export const tg = window.Telegram?.WebApp;

export const initTelegram = () => {
  if (tg) {
    tg.ready();
    tg.expand();
    tg.setHeaderColor?.('#ffffff');
    tg.setBackgroundColor?.('#ffffff');
  }
};

export const getUser = () =>
  tg?.initDataUnsafe?.user || { first_name: 'Mehmon' };

export const getInitData = () => tg?.initData || '';

export const closeApp = () => {
  if (tg) tg.close();
};
