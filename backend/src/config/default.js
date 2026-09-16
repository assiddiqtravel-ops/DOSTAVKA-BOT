import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  botToken: process.env.BOT_TOKEN,
  databaseUrl: process.env.DATABASE_URL,
  miniAppUrl: process.env.MINI_APP_URL || '',
  courierGroupId: process.env.COURIER_GROUP_ID || '',
  env: process.env.NODE_ENV || 'development',
};

if (!config.botToken) {
  console.warn('⚠️  BOT_TOKEN .env faylida topilmadi!');
}

export default config;
