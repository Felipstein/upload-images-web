import { CreatePostUseCases } from './CreatePostUseCases';
import { Request, Response } from "express";

export class CreatePostController {

  constructor(
    private createPostUseCases: CreatePostUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const post = await this.createPostUseCases.execute({ file });

    return res.json(post);
  }

}