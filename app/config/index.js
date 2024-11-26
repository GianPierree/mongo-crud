import 'dotenv/config'

export const Config = {
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
  MONGODB_COLLECTION_NAME: process.env.MONGODB_COLLECTION_NAME
}