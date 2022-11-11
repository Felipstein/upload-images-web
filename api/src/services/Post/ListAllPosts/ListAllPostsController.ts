import { ListAllPostsUseCases } from './ListAllPostsUseCases';
import { Request, Response } from "express";

export class ListAllPostsController {

  constructor(
    private listAllPostsUseCases: ListAllPostsUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const posts = await this.listAllPostsUseCases.execute();

    return res.json(posts);
  }

}