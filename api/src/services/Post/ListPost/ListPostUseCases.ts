import { APIError } from './../../../errors/APIError';
import { IPost } from '../../../models/Post';
import { IPostRepository } from './../../../repositories/IPostRepository';

export class ListPostUseCases {

  constructor(
    private postsRepository: IPostRepository,
  ) { }

  async execute({ id }: { id: string }): Promise<IPost | null> {
    const post = await this.postsRepository.listById(id);

    return post ?? null;
  }

}