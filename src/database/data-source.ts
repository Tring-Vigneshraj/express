import { DataSource } from "typeorm";
import config from "src/config/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.databaseHost,
  port: config.databasePort,
  username: config.databaseUserName,
  password: config.databasePassword,
  database: config.databaseName,
  migrations: ["src/database/migrations/*.ts"],
  logging: true,
  entities: ["src/modules/**/*.entity.ts"],
  synchronize: false,
  subscribers: [],
});