# 📱 FRONTEND (Mini App + Admin) — Vercel (bepul)

Ikkita alohida Vercel loyihasi yaratamiz: **Mini App** (mijozlar) va **Admin**.
Ikkalasi ham backend (Render) ni `VITE_API_URL` orqali chaqiradi.

> Avval backend Render'да tayyor bo'lsin (RENDER.md) — uning manzили kerak,
> masalan: `https://elif-backend.onrender.com`

---

## A) MINI APP (mijozlar ilovasi)

1. https://vercel.com → **GitHub bilan kirish**.
2. **Add New… → Project** → **`DOSTAVKA-BOT`** repozitoriyсини **Import**.
3. Sozlamalar:
   - **Root Directory:** `mini-app`  ← MUHIM (Edit bosib tanlang)
   - **Framework Preset:** Vite (avtomatik aniqlanadi)
   - **Build Command / Output:** avtomatic (`vite build` / `dist`)
4. **Environment Variables** qo'shing:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://elif-backend.onrender.com` (Render manzili, `/` siz)
5. **Deploy** → tayyor bo'lgач manzil chiqadi, masalan
   `https://elif-mini-app.vercel.app` — buни nusxalang.

## B) ADMIN PANEL

1. Yana **Add New… → Project** → o'sha **`DOSTAVKA-BOT`** ni **Import**.
2. Sozlamalar:
   - **Root Directory:** `admin-panel`  ← MUHIM
   - **Framework Preset:** Vite
3. **Environment Variables:**
   - `VITE_API_URL` = `https://elif-backend.onrender.com`
4. **Deploy** → masalan `https://elif-admin.vercel.app`.

---

## C) Backend'ni Mini App manzилига ulash
1. Render → **elif-backend** → **Environment**.
2. `MINI_APP_URL` = **A-bosqichдаги** Mini App manzili
   (masalan `https://elif-mini-app.vercel.app`) → **Save**.
3. Render qayta ishga tushadi → bot endi shu Mini App'ни ochadi.

---

## ✅ Tayyor!
- 🍔 Mini App: `https://elif-mini-app.vercel.app`
- 🔐 Admin: `https://elif-admin.vercel.app` (parol: `elif2026`)
- Telegram: `/start` → **🍔 Buyurtma**

## Eslatmalar
- **Menyu/narx:** Admin panel orqали yoki koddan `git push` → Vercel + Render
  avtomatik yangilanadi.
- **VITE_API_URL o'zgарса:** Vercel loyihани qayta deploy qilish kerak
  (build paytida o'qiladi).
- Frontend Vercel'да har doim tez ochiladi; faqat backend (Render) uxlаса,
  birinchi API chaqiruvi biroz kutadi — keep-alive buни kamaytiradi.
