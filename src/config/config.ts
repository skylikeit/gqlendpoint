require('dotenv').config();

const config = {
  MONGODB: process.env.DATABASE_URL!,
};

export default config;
