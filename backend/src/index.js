import express from 'express';
import cors from 'cors';
import config from './config/default.js';
import clientRoutes from './routes/client.routes.js';
import adminRoutes from './routes/admin.routes.js';
import { registerBot } from './routes/bot.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Salomatlik tekshiruvi
app.get('/', (req, res) => res.json({ status: "Pizza API ishlayapti 🍕" }));

// API yo'llari
app.use('/api', clientRoutes);
app.use('/api/admin', adminRoutes);

// Botni ishga tushirish
registerBot();

app.listen(config.port, () => {
  console.log(`✅ Server ishlayapti: http://localhost:${config.port}`);
});
