import { Schema, model } from "mongoose";

export interface IPost {
  fileName: string;
  size: number;
  key: string;
  url: string;
  createdAt: Date;
}

const postSchema = new Schema<IPost>({
  fileName: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = model<IPost>('Post', postSchema);

export { Post };