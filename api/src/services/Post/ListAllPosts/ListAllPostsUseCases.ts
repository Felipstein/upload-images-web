import { APIError } from './../../../errors/APIError';
import { IPost } from '../../../models/Post';
import { IPostRepository } from './../../../repositories/IPostRepository';

export class ListAllPostsUseCases {

  constructor(
    private postsRepository: IPostRepository,
  ) { }

  async execute(): Promise<IPost[]> {
    const post = await this.postsRepository.listAll();

    return post;
  }

}