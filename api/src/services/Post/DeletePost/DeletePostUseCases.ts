import { APIError } from './../../../errors/APIError';
import { IPost } from '../../../models/Post';
import { IPostRepository } from './../../../repositories/IPostRepository';

export class DeletePostUseCases {

  constructor(
    private postsRepository: IPostRepository,
  ) { }

  async execute({ id }: { id: string }): Promise<void> {
    await this.postsRepository.delete(id);
  }

}