# 🚀 Deploy — Render.com (BEPUL) da 24/7

Render'ning bepul rejasi bilan botni bulutga chiqaramiz. Baza (Neon) allaqachon
to'la — faqat kodni joylaymiz.

> ⚠️ Bepul reja 15 daqiqa harakatsizlikда "uxlaydi". Buni **keep-alive ping**
> (5-bosqich) bilan hal qilamiz — bot doim uyg'oq turadi.

---

## 1. Render'ga kirish
1. https://render.com → **Get Started** → **GitHub bilan kirish**.
2. Render'ga repozitoriyга ruxsat bering.

## 2. Blueprint orqali deploy
1. Yuqori o'ngда **New +** → **Blueprint**.
2. **`DOSTAVKA-BOT`** repozitoriyсини tanlang → **Connect**.
3. Render `render.yaml` ni o'qib, "elif-fast-food" servisини ko'rsatadi → **Apply**.

## 3. Maxfiy sozlamalarni kiritish
Render sizdан quyidagilarни so'raydi (qiymatlarни `backend/.env` faylidан oling):

| Nomi | Qiymati |
|------|---------|
| `DATABASE_URL` | Neon manzili (postgresql://...) |
| `BOT_TOKEN` | Bot tokeni |
| `ADMIN_PASSWORD` | Admin paroli (masalan `elif2026`) |
| `MINI_APP_URL` | Hozircha bo'sh yoki `https://x` qoldiring — 4-bosqichда to'g'rilaymiz |

**Create / Deploy** bosing. Build ~3-5 daqiqа.

## 4. Manzil olish va MINI_APP_URL
1. Deploy tugagach, tepada manzil chiqadi:
   `https://elif-fast-food.onrender.com` (yoki shунга o'xshash).
2. **Environment** bo'limiga o'ting → `MINI_APP_URL` ni o'sha manzилга o'zgartiring
   (oldiga `https://`, oxирida `/` yo'q) → **Save Changes**.
3. Render avtomatik qayta deploy qiladi.

## 5. ⭐ Keep-alive (bot uxlamasligi uchun) — MUHIM
1. https://cron-job.org → bepul ro'yxatdан o'ting.
2. **Create cronjob**:
   - **Title:** Elif keep-alive
   - **URL:** `https://SIZNING-MANZIL.onrender.com/health`
   - **Schedule:** Every 10 minutes (har 10 daqiqа)
3. **Create** → tayyor. Endi bot 24/7 uyg'oq turadi.

## 6. ⚠️ Railway'ni o'chirish (juda muhim!)
Ikki joyда bir vaqtда bir bot ishlаса — to'qnashadi (409 xato). Render ishga
tushgач, Railway'ни o'chiring:
1. Railway → loyihани oching → **Settings** → pastдаги **Danger** →
   **Delete Service / Delete Project**.
2. Shunda Railway'да pul ham yechilmaydi.

---

## Tayyor bo'lgач
- 🍔 Mini App: `https://SIZNING-MANZIL.onrender.com`
- 🔐 Admin: `.../admin` (parol: `elif2026`)
- Telegram: `/start` → **🍔 Buyurtma**

## Eslatmalar
- **Birinchi ochilish sekin (~30-60 soniya)** bo'lishi mumkin, agar uxlаган
  bo'lса. Keep-alive (5-bosqich) buни kamaytiradi.
- **Menyu/narx:** Admin panel orqали yoki koddan `git push` (Render avtomatik
  yangilaydi).
- **Bepul reja:** oyiga 750 soat (bitta servis uchun yetarli). Karta kerak emas.
