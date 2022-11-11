import { APIError } from './../../../errors/APIError';
import { IPost } from '../../../models/Post';
import { IPostRepository } from './../../../repositories/IPostRepository';

export class CreatePostUseCases {

  constructor(
    private postsRepository: IPostRepository,
  ) { }

  async execute({ file }: { file: Express.Multer.File & { key: string, url: string } | undefined }): Promise<IPost> {
    if(!file) {
      throw new APIError(400, 'Arquivo não pode ser nulo ou inexistente.');
    }
    
    console.log(file);

    const { originalname: fileName, size, filename: keyLocal, key: keyS3, url = "" } = file;
    
    const key = keyS3 || keyLocal;
    if(!key) {
      throw new Error('Key (file name uploaded) is null.');
    }

    const post = await this.postsRepository.create({ fileName, key, size, url });

    return post;
  }

}