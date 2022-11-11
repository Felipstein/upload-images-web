import { DeletePostUseCases } from './DeletePostUseCases';
import { Request, Response } from "express";

export class DeletePostController {

  constructor(
    private deletePostUseCases: DeletePostUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const posts = await this.deletePostUseCases.execute({ id });

    return res.json(posts);
  }

}