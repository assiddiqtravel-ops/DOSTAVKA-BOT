# 🚀 Deploy — Botni 24/7 bulutga chiqarish (Railway)

Kompyuter o'chganда ham bot ishlashi uchun loyihani bulutli serverga joylaymiz.
Baza (Neon) allaqachon bulutда va menyu + buyurtmalar unда bor — shuning uchun
faqat kodni Railway'ga qo'yamiz.

> Bu loyiha **bitta servis** qilib tuzilgan: Railway bitta ilovaда bot, API,
> Mini App (`/`) va Admin Panel (`/admin`) — hammasini beradi.

---

## 1. Railway'ga kirish
1. https://railway.app ochib, **"Login with GitHub"** bosing.
2. GitHub'га ruxsat bering (assiddiqtravel-ops akkaunti bilan).

## 2. Loyihani deploy qilish
1. **New Project** → **Deploy from GitHub repo**.
2. Ro'yxatdan **`DOSTAVKA-BOT`** ni tanlang.
   - Agar ko'rinmаса: **Configure GitHub App** → repozitoriyга Railway'ga ruxsat bering.
3. Railway avtomatik build qila boshlaydi (bir necha daqiqa).

## 3. Sozlamalarni (Environment Variables) qo'shish
Loyiha ochилganda **Variables** bo'limiga o'ting va quyidagilarni qo'shing.
Qiymatlarни kompyuteringizdagi `backend/.env` faylidан nusxa oling:

| Nomi | Qiymati |
|------|---------|
| `DATABASE_URL` | `.env` dagi Neon manzili (postgresql://...) |
| `BOT_TOKEN` | `.env` dagi bot tokeni |
| `NODE_ENV` | `production` |
| `ADMIN_PASSWORD` | Admin Panelга kirish uchun kuchli parol o'ylab toping |

> `MINI_APP_URL` ni hozircha qo'shmang — 5-qadamда qo'shamiz.

## 4. Domen (manzil) olish
1. **Settings** → **Networking** → **Generate Domain** bosing.
2. Sizga manzil beriladi, masalan:
   `https://dostavka-bot-production.up.railway.app`
3. Shu manzilni nusxa oling.

## 5. MINI_APP_URL ni qo'shish
1. Yana **Variables** ga o'ting.
2. Yangi o'zgaruvchi: `MINI_APP_URL` = 4-qadamдаги manzil (masalan
   `https://dostavka-bot-production.up.railway.app`).
3. Railway o'zi qayta deploy qiladi.

## 6. Tayyor! ✅
- **Bot** endi 24/7 ishlaydi (kompyuter kerak emas).
- **Mini App:** `https://...up.railway.app`
- **Admin Panel:** `https://...up.railway.app/admin` (parol bilan)
- Telegramда `/start` → **🍔 Buyurtma** tugmasi ishlaydi.

---

## ⚠️ Muhim eslatmalar
- **Faqat bitta bot ishlashi kerak.** Railway ishga tushgach, kompyuterда
  `STOP.bat` ni bosing — aks holda ikki bot bitta tokenga ulanib xato beradi.
- **Narx:** Railway boshida bepul kredit beradi, keyin taxminan **$5/oy**
  (karta kerak). Bu kichik loyiha uchun yetarli.
- **Parollar** hech qachon GitHub'ga yuklanmaydi (`.env` himoyalangan). Ular
  faqat Railway "Variables" da va sizning kompyuteringizда turadi.
- **Baza:** Neon allaqachon to'la (80 mahsulot + buyurtmalar). Railway'да qayta
  seed qilish shart emas.

## Menyu yoki narx o'zgarса
- **Oson yo'l:** Admin Panel (`/admin`) → Mahsulotlar → tahrirlash.
- **Koddан:** o'zgartirib, GitHub'ga `git push` qiling — Railway avtomatik
  yangilanadi.
