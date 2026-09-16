# 🖥 BACKEND (API + Bot) — Render.com (bepul)

Backend + Telegram bot Render'да ishlaydi. Frontend esa Vercel'да (VERCEL.md).

> ⚠️ Render bepul reja 15 daqiqa harakatsizlikда uxlaydi. Buni **keep-alive
> ping** (5-bosqich) bilan hal qilamiz.

---

## 1. Render'ga kirish
https://render.com → **Get Started** → **GitHub bilan kirish** → repozitoriyга ruxsat.

## 2. Blueprint orqali deploy
1. **New +** → **Blueprint**.
2. **`DOSTAVKA-BOT`** repozitoriyсини tanlang → **Connect**.
3. Render `render.yaml` ni o'qib, **elif-backend** servisини ko'rsatadi → **Apply**.

## 3. Maxfiy sozlamalar (qiymatlar `backend/.env` dan)
| Nomi | Qiymati |
|------|---------|
| `DATABASE_URL` | Neon manzili (postgresql://...) |
| `BOT_TOKEN` | Bot tokeni |
| `ADMIN_PASSWORD` | `elif2026` (yoki o'zingiznики) |
| `MINI_APP_URL` | hozircha bo'sh — Vercel Mini App tayyor bo'lgач qo'yamiz |

**Deploy** → 3-5 daqiqа.

## 4. Backend manzilини olish
Deploy tugagач manzil chiqadi, masalan:
`https://elif-backend.onrender.com`
Buни nusxalang — **Vercel'да VITE_API_URL uchun** kerak bo'ladi.

Tekshirish: brauzerда `https://elif-backend.onrender.com/api/products` — pizzalar
ro'yxati (JSON) chiqса, backend ishlayapti ✅

## 5. ⭐ Keep-alive (bot uxlamasligi uchun) — MUHIM
1. https://cron-job.org → bepul ro'yxatdан o'ting.
2. **Create cronjob:**
   - **URL:** `https://elif-backend.onrender.com/health`
   - **Every 10 minutes**
3. Create. Endi backend + bot 24/7 uyg'oq.

## 6. Vercel tayyor bo'lgач
Vercel'да Mini App manzилini olгач (VERCEL.md), shu yerга qaytib:
- Render → **Environment** → `MINI_APP_URL` = Vercel Mini App manzili → **Save**.

## 7. ⚠️ Railway'ни o'chiring
Ikki bot to'qnashmasligi uchun: Railway → loyiha → **Settings → Danger →
Delete Service/Project**. (Pul ham yechilmaydi.)

---
Keyingi qadam: **VERCEL.md** — frontendни joylash.
