# 🍔 Elif Fast Food — Telegram Mini App + Admin Panel

To'liq ishlaydigan tizim (localhost). Uch qismdan iborat:

| Papka | Nima | Port |
|-------|------|------|
| `backend/` | Node.js API + Telegram bot (Prisma + PostgreSQL/Neon) | `5000` |
| `mini-app/` | Mijozlar uchun React Mini App | `5173` |
| `admin-panel/` | Ma'murlar uchun React Dashboard | `5174` |

> ✅ Node.js, barcha paketlar, cloudflared, baza va menyu (80 mahsulot) allaqachon o'rnatilgan/sozlangan.

---

## 🚀 ISHGA TUSHIRISH — eng oson yo'l

Shunchaki **`START.bat`** faylini ikki marta bosing.

U avtomatik:
1. Mini App'ni ishga tushiradi (5173)
2. Admin Panel'ni ishga tushiradi (5174)
3. `cloudflared` tunnel ochadi (Telegram uchun HTTPS)
4. Yangi tunnel manzilini `backend/.env` ga yozadi
5. Backend + Bot'ni ishga tushiradi

So'ng Telegramда botga **/start** yozing va **"🍔 Buyurtma"** tugmasini bosing.

**To'xtatish uchun:** `STOP.bat` ni bosing (yoki ochilgan oynalarni yoping).

> ⚠️ `cloudflared`ning bepul tunnel manzili **har ishga tushirishда o'zgaradi**. `START.bat` buni o'zi hal qiladi — siz hech narsa qo'lда o'zgartirmaysiz.

---

## 🖥 Admin Panel

Brauzerда: **http://localhost:5174**

- **Buyurtmalar** — barcha buyurtmalar (har 15 soniyada avtomatik yangilanadi). Mijoz ismi, telefoni, tarkibi, **manzili va 📍 GPS joylashuvi (xaritada ochish)**, summasi, sanasi va holati.
- **Mahsulotlar** — 80 ta mahsulot. Qo'shish / tahrirlash / o'chirish. Bu yerда har bir taomga **haqiqiy rasm** (masalan Instagram'dagi) URL'ini qo'yishingiz mumkin.

---

## 📱 Mini App (mijoz)

- **Onboarding** (3 slayd, faqat birinchi marta)
- **Bosh sahifa** — stories, hero, restoran manzili (Angren)
- **Katalog** — kategoriya filtri, kartochkalar, tezkor `+`
- **Mahsulot oynasi** — katta rasm, tarkibi, "Savatchaga qo'shish"
- **Savatcha** — miqdor, Coca-Cola upsell, **📍 GPS joylashuvni yuborish**, telefon/manzil, tasdiqlash
- **Profil** — buyurtmalar tarixi, "yana buyurtma qilish"

Buyurtма berilgach: baza'ga tushadi → bot mijozga tasdiq xabari yuboradi → Admin Panelда ko'rinadi.

---

## 📍 Joylashuv (GPS) qanday ishlaydi

- Mijoz savatchада **"📍 Joylashuvni yuborish"** tugmasini bosadi.
- Telegram/brauzer lokatsiyaga ruxsat so'raydi → GPS koordinatasi olinadi.
- Buyurtма bilan birga **Google Maps havolasi** saqlanadi.
- Admin Panelда **"📍 Xaritada ochish"** tugmasi paydo bo'ladi — bosilганда mijozning aniq joyi xaritada ochiladi.
- Agar mijoz ruxsat bermаса — manzilni matn bilan yozadi (ikkalasi ham qo'llab-quvvatlanadi).

---

## 🔧 Qo'lда ishga tushirish (agar kerak bo'lsa)

Har biri alohida terminalда:

```bash
cd backend && npm start
cd mini-app && npm run dev
cd admin-panel && npm run dev
```

Telegram uchun tunnel (yangi terminal):

```bash
cloudflared tunnel --url http://localhost:5173
```

Chиqqan `https://....trycloudflare.com` manzilini `backend/.env` dagi `MINI_APP_URL` ga qo'ying va backend'ni qayta ishga tushiring.

---

## 🗄 Baza (Prisma + Neon)

Ulanish `backend/.env` dagi `DATABASE_URL` orqali. Menyuni qayta yozish yoki jadvallar o'zgarса:

```bash
cd backend
npm run db:push   # jadval sxemasini bazaga qo'llash
npm run seed      # menyuni (80 mahsulot) qayta yozish
```

> `npm run seed` eski mahsulotlarni tozalab, `prisma/seed.js` dagi to'liq menyuни qayta yozadi.

---

## 🛠 Muammolar

- **Bot javob bermаса:** backend oynasида `🤖 Bot ishga tushdi` borligini tekshiring.
- **Mini App ochilmаса (Telegram):** tunnel oynаси ochiqligini va `.env` dagi `MINI_APP_URL` to'g'риligini tekshiring (`START.bat` buni o'zi qiladi).
- **Admin/Mini App'да ma'lumot yo'q:** backend (5000-port) ishlаyotганини tekshiring.
- **Port band:** `STOP.bat` ni bosib, keyin `START.bat` ni qayta ishga tushiring.
