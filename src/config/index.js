import dotenv from 'dotenv';

dotenv.config();

const { API_PORT } = process.env;
const { MONGO_DB_URI } = process.env;

export { API_PORT, MONGO_DB_URI };
