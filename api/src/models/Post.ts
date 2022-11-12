import { Schema, model } from "mongoose";
import { port } from "../server";

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

postSchema.pre('save', function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}:${port}/files/${this.key}`;
  }
});

const Post = model<IPost>('Post', postSchema);

export { Post };