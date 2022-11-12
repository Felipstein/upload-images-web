import { APIError } from './../../../errors/APIError';
import { IPost } from '../../../models/Post';
import { IPostRepository } from './../../../repositories/IPostRepository';
import { DeleteImage } from '../../../providers/DeleteImage';

export class DeletePostUseCases {

  constructor(
    private postsRepository: IPostRepository,
  ) { }

  async execute({ id }: { id: string }): Promise<void> {
    const post = await this.postsRepository.listById(id);
    if (!post) {
      return;
    }

    await DeleteImage(post.key);
    await this.postsRepository.delete(id);
  }

}