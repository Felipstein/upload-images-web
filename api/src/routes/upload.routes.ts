import { Router } from "express";
import multer from "multer";

const route = Router();

route.post('/images', multer().single('file'), (req, res) => {
  
});

export { route as uploadRoutes };