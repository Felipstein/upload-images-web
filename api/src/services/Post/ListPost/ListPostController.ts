import { ListPostUseCases } from './ListPostUseCases';
import { Request, Response } from "express";

export class ListPostController {

  constructor(
    private listPostUseCases: ListPostUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const posts = await this.listPostUseCases.execute({ id });

    return res.json(posts);
  }

}