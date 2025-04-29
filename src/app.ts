import 'reflect-metadata';
import express from 'express';
import { errorHandler } from 'src/middlewares/errorHandler';
import { AppDataSource } from 'src/database/data-source';
import routeRegister from 'src/routes/routeRegister';

const app = express();

app.use(express.json());
routeRegister(app);
app.use(errorHandler);
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((error) => console.error('DB connection error', error));

export default app;
