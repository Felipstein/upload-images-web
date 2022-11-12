import express from 'express';
import morgan from 'morgan';
import 'express-async-errors';
import 'dotenv/config';

import { uploadRoutes } from './routes/upload.routes';
import { setupDatabase } from './database/setup';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(setupDatabase);

app.use(uploadRoutes);

app.use(errorHandler);

export { app };