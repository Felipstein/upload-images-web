import { APIError } from './../../../errors/APIError';
import { IPost } from '../../../models/Post';
import { IPostRepository } from './../../../repositories/IPostRepository';

export class CreatePostUseCases {

  constructor(
    private postsRepository: IPostRepository,
  ) { }

  async execute({ file }: { file: Express.Multer.File | undefined }): Promise<IPost> {
    if(!file) {
      throw new APIError(400, 'Arquivo não pode ser nulo ou inexistente.');
    }

    const { originalname: fileName, size, filename: key } = file;
    const url = 'dawdawdwa';

    const post = await this.postsRepository.create({ fileName, key, size, url });

    return post;
  }

}