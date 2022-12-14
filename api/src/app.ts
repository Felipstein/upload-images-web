import express from 'express';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import path from 'path';
import 'express-async-errors';
import 'dotenv/config';

import { uploadRoutes } from './routes/upload.routes';
import { setupDatabase } from './database/setup';
import { errorHandler } from './middlewares/errorHandler';
import { loadS3Credentials } from './config/multer';

const app = express();

const corsOptions = {
  origin: process.env.ORIGIN!,
} as CorsOptions;

app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(loadS3Credentials);
app.use(setupDatabase);
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp', 'uploads')));

app.use(uploadRoutes);

app.use(errorHandler);

export { app };