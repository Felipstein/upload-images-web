import { Router } from "express";
import multer from "multer";

import multerConfig from "../config/multer";

const route = Router();

const upload = multer(multerConfig);

route.post('/images', upload.single('file'), (req, res) => {
  console.log(req.file);

  return res.json({ filename: req.file?.filename });
});

export { route as uploadRoutes };