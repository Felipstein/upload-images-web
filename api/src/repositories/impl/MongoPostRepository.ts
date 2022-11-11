import { isValidObjectId } from 'mongoose';
import { IPost, Post } from '../../models/Post';
import { IPostRepository } from './../IPostRepository';

export class MongoPostRepository implements IPostRepository {

  async listAll(): Promise<IPost[]> {
    return await Post.find();
  }

  async listById(id: string): Promise<IPost | any | null> {
    if(!isValidObjectId(id)) {
      return null;
    }

    const post = await Post.findById(id);

    return post ?? null;
  }

  async create({ fileName, size, key, url }: Omit<IPost, 'createdAt'>): Promise<IPost> {
    const post = new Post({
      fileName, size, key, url,
    });

    await post.save();

    return post;
  }

  async delete(id: string): Promise<void> {
    if(!isValidObjectId(id)) {
      return;
    }

    await Post.findByIdAndDelete(id);
  }

}