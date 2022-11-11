import { IPost } from './../models/Post';

export interface IPostRepository {

  listAll(): Promise<IPost[]>;

  listById(id: string): Promise<IPost | undefined>;

  create({ fileName, size, key, url }: Omit<IPost, 'createdAt'>): Promise<IPost>;

  delete(id: string): Promise<void>;

}