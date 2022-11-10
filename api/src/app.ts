import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';

import { uploadRoutes } from './routes/upload.routes';
import { setupDatabase } from './database/setup';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(setupDatabase);

app.use(uploadRoutes);

export { app };