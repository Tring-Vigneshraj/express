import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  databaseName: string;
  databaseHost: string;
  databasePort: number;
  databaseUserName: string;
  databasePassword: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  databaseName: process.env.DATABASE_NAME || "ecommerce",
  databaseHost: process.env.DATABASE_HOST || "localhost",
  databasePort: Number(process.env.DATABASE_PORT) || 5432,
  databaseUserName: process.env.DATABASE_USERNAME || "postgres",
  databasePassword: process.env.DATABASE_PASSWORD || "welcome@ta",
};

export default config;
