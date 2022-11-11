import { Router } from "express";
import multer from "multer";

import multerConfig from "../config/multer";
import { createPostFactory } from "../services/Post/CreatePost";
import { deletePostFactory } from "../services/Post/DeletePost";
import { listAllPostsFactory } from "../services/Post/ListAllPosts";
import { listPostFactory } from "../services/Post/ListPost";

const route = Router();

const upload = multer(multerConfig);

route.get('/images', (req, res) => {
  return listAllPostsFactory().controller.handle(req, res);
});

route.get('/images/:id', (req, res) => {
  return listPostFactory().controller.handle(req, res);
});

route.post('/images', upload.single('file'), (req, res) => {
  return createPostFactory().controller.handle(req, res);
});

route.delete('/images/:id', (req, res) => {
  return deletePostFactory().controller.handle(req, res);
});

export { route as uploadRoutes };