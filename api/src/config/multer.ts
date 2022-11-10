import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  dest: path.resolve('temp', 'uploads'),

  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve('temp', 'uploads'));
    },

    filename(req, file, callback) {
      crypto.randomBytes(6, (err, hash) => {
        const time = new Date().getTime();
        const fileName = `${time}-${hash.toString('hex')}_${file.originalname}`;

        if(err) {
          callback(err, fileName);
        }

        callback(null, fileName);
      });

    },
  }),

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

    if(allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Esse arquivo não é um tipo de imagem.'));
    }
  },

} as multer.Options;