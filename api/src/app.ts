import express from 'express';
import morgan from 'morgan';

import { uploadRoutes } from './routes/upload.routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(uploadRoutes);

export { app };