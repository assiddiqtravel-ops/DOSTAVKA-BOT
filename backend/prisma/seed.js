import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Kategoriya bo'yicha rasm (placeholder). Admin Panelда har birini
// haqiqiy (Instagram) rasm bilan almashtirish mumkin.
const q = '?w=600&q=80';
const IMG = {
  Lavash: `https://images.unsplash.com/photo-1529006557810-274b9b2fc783${q}`,
  Burger: `https://images.unsplash.com/photo-1568901346375-23c9450c58cd${q}`,
  Shaurma: `https://images.unsplash.com/photo-1561651823-34feb02250e4${q}`,
  'Xot-dog': `https://images.unsplash.com/photo-1619740455993-9d77a82c8559${q}`,
  Pitsa: `https://images.unsplash.com/photo-1513104890138-7c749659a591${q}`,
  KFC: `https://images.unsplash.com/photo-1562967914-608f82629710${q}`,
  Fri: `https://images.unsplash.com/photo-1573080496219-bb080dd4f877${q}`,
  Sendvich: `https://images.unsplash.com/photo-1528735602780-2552fd46c7af${q}`,
  Salat: `https://images.unsplash.com/photo-1512621776951-a57141f2eefd${q}`,
  Taomlar: `https://images.unsplash.com/photo-1544025162-d76694265947${q}`,
  Souslar: `https://images.unsplash.com/photo-1504674900247-0877df9cc836${q}`,
  Desert: `https://images.unsplash.com/photo-1551024506-0bccd828d307${q}`,
  Kofe: `https://images.unsplash.com/photo-1509042239860-f550ce710b93${q}`,
  Limonad: `https://images.unsplash.com/photo-1621263764928-df1444c5e859${q}`,
  Ichimliklar: `https://images.unsplash.com/photo-1554866585-cd94860890b7${q}`,
};

// Elif Fast Food — to'liq menyu
const menu = [
  // ---------- Lavash ----------
  { category: 'Lavash', name: 'Lavash', newPrice: 38000, description: "Go'sht, kartoshka fri, sabzavot, maxsus sous" },
  { category: 'Lavash', name: 'Lavash Big', newPrice: 42000, description: "Katta hajm, go'sht, fri, sabzavot, sous" },
  { category: 'Lavash', name: 'Lavash Mini', newPrice: 34000, description: "Kichik hajm, go'sht, fri, sous" },
  { category: 'Lavash', name: 'Lavash Tandir', newPrice: 48000, description: "Tandir lavash, go'sht, sabzavot, sous" },
  { category: 'Lavash', name: 'Lavash Tandir Tovuqli', newPrice: 40000, description: "Tandir, tovuq go'shti, sabzavot, sous" },
  { category: 'Lavash', name: 'Lavash Pishloqli', newPrice: 40000, description: "Go'sht, pishloq, fri, sabzavot, sous" },
  { category: 'Lavash', name: 'Lavash Mini Pishloqli', newPrice: 36000, description: "Kichik, pishloq, go'sht, sous" },
  { category: 'Lavash', name: 'Lavash Big Pishloqli', newPrice: 46000, description: "Katta, pishloq, go'sht, fri, sous" },
  { category: 'Lavash', name: 'Lavash Tovuqli', newPrice: 32000, description: "Tovuq go'shti, fri, sabzavot, sous" },
  { category: 'Lavash', name: 'Lavash Tovuqli Mini', newPrice: 30000, description: "Kichik, tovuq, fri, sous" },
  { category: 'Lavash', name: 'Lavash Tovuqli Big', newPrice: 34000, description: "Katta, tovuq, fri, sabzavot, sous" },

  // ---------- Burger ----------
  { category: 'Burger', name: 'Gamburger', newPrice: 32000, description: "Mol go'shti kotleti, sabzavot, sous" },
  { category: 'Burger', name: 'Chizburger', newPrice: 36000, description: "Kotlet, cheddar pishloq, sabzavot, sous" },
  { category: 'Burger', name: 'Big Burger', newPrice: 42000, description: "Ikki kotlet, sabzavot, maxsus sous" },
  { category: 'Burger', name: 'Big Chizburger', newPrice: 46000, description: "Ikki kotlet, pishloq, sabzavot, sous" },

  // ---------- Shaurma / Donar ----------
  { category: 'Shaurma', name: 'Donar Big', newPrice: 38000, description: "Katta donar, go'sht, sabzavot, sous" },
  { category: 'Shaurma', name: 'Donar Mini', newPrice: 33000, description: "Kichik donar, go'sht, sabzavot, sous" },

  // ---------- Xot-dog ----------
  { category: 'Xot-dog', name: 'Xot-dog', newPrice: 20000, description: "Sosiska, non, ketchup, gorchitsa" },
  { category: 'Xot-dog', name: 'Xot-dog Chiz', newPrice: 23000, description: "Sosiska, pishloq, sous" },
  { category: 'Xot-dog', name: 'Haggi', newPrice: 37000, description: "Maxsus katta xot-dog, sous" },

  // ---------- Pitsa (2 o'lcham: 25sm / 35sm) ----------
  { category: 'Pitsa', name: 'Pitsa Pepperoni 25sm', newPrice: 55000, description: "Pepperoni, tomat sous, mozzarella pishloq" },
  { category: 'Pitsa', name: 'Pitsa Pepperoni 35sm', newPrice: 75000, description: "Pepperoni, tomat sous, mozzarella pishloq" },
  { category: 'Pitsa', name: 'Pitsa Elif 25sm', newPrice: 59000, description: "Maxsus sous, mozzarella, aralash go'sht" },
  { category: 'Pitsa', name: 'Pitsa Elif 35sm', newPrice: 79000, description: "Maxsus sous, mozzarella, aralash go'sht" },
  { category: 'Pitsa', name: 'Pitsa BBQ 25sm', newPrice: 69000, description: "BBQ sous, mozzarella, kotlet, pishloq" },
  { category: 'Pitsa', name: 'Pitsa BBQ 35sm', newPrice: 89000, description: "BBQ sous, mozzarella, kotlet, pishloq" },
  { category: 'Pitsa', name: "Pitsa Qo'ziqorinli 25sm", newPrice: 50000, description: "Sous, mozzarella, shampinyon qo'ziqorin" },
  { category: 'Pitsa', name: "Pitsa Qo'ziqorinli 35sm", newPrice: 70000, description: "Sous, mozzarella, shampinyon qo'ziqorin" },
  { category: 'Pitsa', name: 'Pitsa Sirli Max 25sm', newPrice: 44000, description: "Sous, mozzarella pishloq (4 xil pishloq)" },
  { category: 'Pitsa', name: 'Pitsa Sirli Max 35sm', newPrice: 64000, description: "Sous, mozzarella pishloq (4 xil pishloq)" },
  { category: 'Pitsa', name: 'Pitsa Donar 25sm', newPrice: 69000, description: "Sous, mozzarella, donar go'shti, piyoz, zaytun" },
  { category: 'Pitsa', name: 'Pitsa Donar 35sm', newPrice: 89000, description: "Sous, mozzarella, donar go'shti, piyoz, zaytun" },
  { category: 'Pitsa', name: "Pitsa Tovuq-Qo'ziqorin 25sm", newPrice: 64000, description: "Sous, mozzarella, tovuq filesi, qo'ziqorin" },
  { category: 'Pitsa', name: "Pitsa Tovuq-Qo'ziqorin 35sm", newPrice: 74000, description: "Sous, mozzarella, tovuq filesi, qo'ziqorin" },
  { category: 'Pitsa', name: 'Pitsa Margarita 25sm', newPrice: 44000, description: "Sous, mozzarella, pomidor, zaytun" },
  { category: 'Pitsa', name: 'Pitsa Margarita 35sm', newPrice: 64000, description: "Sous, mozzarella, pomidor, zaytun" },

  // ---------- KFC ----------
  { category: 'KFC', name: 'Qanotchalar', newPrice: 38000, description: "Qarsildoq qovurilgan tovuq qanotchalari" },

  // ---------- Fri ----------
  { category: 'Fri', name: 'Fri kartoshka', newPrice: 16000, description: "Qarsildoq kartoshka fri" },
  { category: 'Fri', name: 'Qishloqcha Fri', newPrice: 18000, description: "Po'sti bilan qovurilgan kartoshka" },

  // ---------- Sendvich ----------
  { category: 'Sendvich', name: 'Klab Sendvich', newPrice: 40000, description: "Uch qavatli klab sendvich, sabzavot" },
  { category: 'Sendvich', name: "Klab Go'shtli", newPrice: 40000, description: "Go'shtli klab sendvich, pishloq, sabzavot" },

  // ---------- Salat ----------
  { category: 'Salat', name: 'Grek salati', newPrice: 22000, description: "Sabzavot, feta pishloq, zaytun, zaytun moyi" },
  { category: 'Salat', name: 'Mujskoy Kapriz', newPrice: 28000, description: "Go'sht, sabzavot, maxsus sous" },

  // ---------- Taomlar (Blyuda) ----------
  { category: 'Taomlar', name: 'Donar Blyudo', newPrice: 54000, description: "Donar go'shti, garnir, sabzavot, sous" },
  { category: 'Taomlar', name: 'Donar Blyudo Tovuqli', newPrice: 52000, description: "Tovuq donar, garnir, sabzavot, sous" },
  { category: 'Taomlar', name: 'Iskender', newPrice: 58000, description: "Iskender kabob, non, sous, yogurt" },

  // ---------- Souslar ----------
  { category: 'Souslar', name: 'Sirli Sous', newPrice: 3000, description: "Pishloqli sous" },
  { category: 'Souslar', name: 'Sarimsoqli Sous', newPrice: 3000, description: "Sarimsoqli oq sous" },
  { category: 'Souslar', name: 'Xalapenyo', newPrice: 4000, description: "Achchiq xalapenyo sousi" },
  { category: 'Souslar', name: 'Chili Sous', newPrice: 3000, description: "Achchiq chili sousi" },

  // ---------- Desert ----------
  { category: 'Desert', name: 'Trayfl Dubay', newPrice: 55000, description: "Dubay uslubidagi trayfl deserti" },
  { category: 'Desert', name: 'Trayfl Snickers', newPrice: 50000, description: "Snickers ta'midagi trayfl" },
  { category: 'Desert', name: 'Trayfl Qulupnay', newPrice: 50000, description: "Qulupnayli trayfl deserti" },
  { category: 'Desert', name: 'Chizkeyk Elif', newPrice: 27000, description: "Maxsus Elif chizkeyki" },

  // ---------- Kofe ----------
  { category: 'Kofe', name: 'Kofe 3/1', newPrice: 10000, description: "Tez tayyor 3/1 kofe" },
  { category: 'Kofe', name: 'Qora Kofe', newPrice: 8000, description: "Klassik qora kofe" },
  { category: 'Kofe', name: 'Amerikano', newPrice: 16000, description: "Amerikano kofe" },
  { category: 'Kofe', name: 'Kapuchino', newPrice: 18000, description: "Sutli kapuchino" },
  { category: 'Kofe', name: 'Latte', newPrice: 17000, description: "Yumshoq sutli latte" },

  // ---------- Limonad ----------
  { category: 'Limonad', name: 'Limonad Qulupnay', newPrice: 19000, description: "Mohito, qulupnay ta'mi" },
  { category: 'Limonad', name: 'Limonad Malina', newPrice: 19000, description: "Mohito, malina ta'mi" },
  { category: 'Limonad', name: 'Limonad Kiwi', newPrice: 19000, description: "Mohito, kiwi ta'mi" },
  { category: 'Limonad', name: 'Limonad Marakuya', newPrice: 19000, description: "Mohito, marakuya ta'mi" },
  { category: 'Limonad', name: 'Limonad Tropik', newPrice: 19000, description: "Mohito, tropik ta'mi" },
  { category: 'Limonad', name: "Limonad O'rmon rezavori", newPrice: 19000, description: "Mohito, o'rmon rezavorlari" },
  { category: 'Limonad', name: 'Limonad Baba Gam', newPrice: 19000, description: "Mohito, baba gam ta'mi" },
  { category: 'Limonad', name: "Limonad Ko'k Gavayi", newPrice: 19000, description: "Mohito, ko'k gavayi ta'mi" },
  { category: 'Limonad', name: 'Limonad Smorodina', newPrice: 19000, description: "Mohito, qora smorodina" },
  { category: 'Limonad', name: 'Limonad Apelsin', newPrice: 19000, description: "Mohito, apelsin ta'mi" },
  { category: 'Limonad', name: 'Choy Limonli', newPrice: 12000, description: "Issiq limonli choy" },

  // ---------- Ichimliklar ----------
  { category: 'Ichimliklar', name: 'Pepsi 0.4L', newPrice: 9000, description: "Salqin Pepsi 400 ml" },
  { category: 'Ichimliklar', name: 'Pepsi 1.5L', newPrice: 18000, description: "Pepsi 1.5 litr" },
  { category: 'Ichimliklar', name: 'Pepsi 1L', newPrice: 12000, description: "Pepsi 1 litr" },
  { category: 'Ichimliklar', name: 'Pepsi 0.5L', newPrice: 8000, description: "Pepsi 0.5 litr" },
  { category: 'Ichimliklar', name: 'Cola 1.5L', newPrice: 18000, description: "Coca-Cola 1.5 litr" },
  { category: 'Ichimliklar', name: 'Cola 1L', newPrice: 14000, description: "Coca-Cola 1 litr" },
  { category: 'Ichimliklar', name: 'Cola 0.5L', newPrice: 8000, description: "Coca-Cola 0.5 litr" },
  { category: 'Ichimliklar', name: 'Cola shishali', newPrice: 5000, description: "Shishadagi Coca-Cola" },
  { category: 'Ichimliklar', name: 'Sok 1L', newPrice: 17000, description: "Tabiiy sharbat 1 litr" },
  { category: 'Ichimliklar', name: 'Sok 200ml', newPrice: 6000, description: "Tabiiy sharbat 200 ml" },
];

// Har bir mahsulotga kategoriya rasmini biriktiramiz
const data = menu.map((p) => ({
  ...p,
  oldPrice: null,
  image: IMG[p.category] || IMG.Pitsa,
}));

async function main() {
  // Menyuni yangilash: eski mahsulotlarni o'chirib, yangisini yozamiz.
  // (Buyurtmalar items'ni JSON sifatida saqlaydi — ular o'chmaydi.)
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data });
  console.log(`✅ Elif Fast Food menyusi yozildi: ${data.length} ta mahsulot.`);
}

main()
  .catch((e) => {
    console.error('❌ Seed xatosi:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
