// Telegram WebApp bilan ishlash uchun yordamchi funksiyalar
export const tg = window.Telegram?.WebApp;

// Ilova mavzusini (light/dark) Telegram yoki tizim sozlamasiga moslaydi
const applyTheme = () => {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const scheme = tg?.colorScheme || (prefersDark ? 'dark' : 'light');
  const isDark = scheme === 'dark';

  document.documentElement.setAttribute('data-theme', scheme);

  // Telegram sarlavha va fon ranglarini mavzuga moslaymiz
  const bg = isDark ? '#0e0e13' : '#ffffff';
  tg?.setHeaderColor?.(bg);
  tg?.setBackgroundColor?.(bg);
};

export const initTelegram = () => {
  if (tg) {
    tg.ready();
    tg.expand();
    // Telegramda mavzu o'zgarsa (light <-> dark), darhol yangilanadi
    tg.onEvent?.('themeChanged', applyTheme);
  }
  // Tizim mavzusi o'zgarganda ham reaksiya bildiramiz (brauzer/Telegram desktop)
  window
    .matchMedia?.('(prefers-color-scheme: dark)')
    .addEventListener?.('change', applyTheme);

  applyTheme();
};

export const getUser = () =>
  tg?.initDataUnsafe?.user || { first_name: 'Mehmon' };

export const getInitData = () => tg?.initData || '';

export const closeApp = () => {
  if (tg) tg.close();
};
