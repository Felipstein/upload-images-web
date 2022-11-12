import { Schema, model } from "mongoose";
import aws from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { promisify } from "util";

import { port } from "../server";
import { type as storageType } from "../config/multer";
import { DeleteImage } from "../providers/DeleteImage";

const s3 = new aws.S3();

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