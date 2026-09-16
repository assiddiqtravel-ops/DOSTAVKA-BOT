// Telegram WebApp bilan ishlash uchun yordamchi funksiyalar
export const tg = window.Telegram?.WebApp;

// Ilova doim yorug' (KFC uslubi) temada ishlaydi — qorong'i tema ishlatilmaydi.
const applyTheme = () => {
  document.documentElement.setAttribute('data-theme', 'light');
  // Telegram sarlavha va foni ham yorug' bo'lsin
  tg?.setHeaderColor?.('#ffffff');
  tg?.setBackgroundColor?.('#f7f1ee');
};

export const initTelegram = () => {
  if (tg) {
    tg.ready();
    tg.expand();
    // Telegram temasi o'zgarsa ham biz yorug'da qolamiz
    tg.onEvent?.('themeChanged', applyTheme);
  }
  applyTheme();
};

export const getUser = () =>
  tg?.initDataUnsafe?.user || { first_name: 'Mehmon' };

export const getInitData = () => tg?.initData || '';

export const closeApp = () => {
  if (tg) tg.close();
};
