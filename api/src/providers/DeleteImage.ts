import aws from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import { bucketName, type as storageType } from "../config/multer";

const s3 = new aws.S3();

export async function DeleteImage(key: string) {
  if (storageType === 's3') {
    return await s3.deleteObject({
      Bucket: bucketName,
      Key: key,
    }).promise();
  } else {
    return await promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'temp', 'uploads', key));
  }
}