import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { S3Client } from '@aws-sdk/client-s3';
import multerS3 from 'multer-s3';
import { NextFunction, Request, Response } from 'express';

export const {
  AWS_DEFAULT_REGION: region,
  AWS_ACCESS_KEY_ID: accessKeyId,
  AWS_SECRET_ACCESS_KEY: secretAccessKey,
  STORAGE_TYPE: type = 's3',
} = process.env;

export function loadS3Credentials(req: Request, res: Response, next: NextFunction) {
  if ([region, accessKeyId, secretAccessKey].some(value => !value)) {
    throw new Error('Fatal error: S3 "AWS_DEFAULT_REGION", "AWS_ACCESS_KEY_ID" or/and "AWS_SECRET_ACCESS_KEY" not defined in .env');
  }

  next();
}

const storageType = {
  local: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve('temp', 'uploads'));
    },

    filename(req, file, callback) {
      crypto.randomBytes(6, (err, hash) => {
        const time = new Date().getTime();
        const fileName = `${time}-${hash.toString('hex')}_${file.originalname}`;

        if (err) {
          callback(err, fileName);
        }

        callback(null, fileName);
      });
    },
  }),

  s3: multerS3({
    s3: new S3Client({
      region: region,
      credentials: {
        accessKeyId: accessKeyId ?? '', secretAccessKey: secretAccessKey ?? '',
      }
    }),
    bucket: 'felipeuploadimages',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key(req, file, callback) {
      crypto.randomBytes(6, (err, hash) => {
        if (err) {
          callback(err);
        }

        const time = new Date().getTime();
        const fileName = `${time}-${hash.toString('hex')}_${file.originalname}`;

        callback(null, fileName);
      });
    },
  })
};

export default {
  dest: path.resolve('temp', 'uploads'),

  storage: type === 's3' ? storageType.s3 : storageType.local, // I don't know how to solve this problem with typescript yet

  limits: {
    fileSize: 30 * 1024 * 1024
  },

  fileFilter(req, file, callback) {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Esse arquivo não é um tipo de imagem.'));
    }
  },

} as multer.Options;