import { Bucket, DeleteFileOptions, Storage } from '@google-cloud/storage';
import { BadRequestException, Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class CloudStorageService {
  private bucket: Bucket;
  private storage: Storage;

  constructor() {
    this.storage = new Storage({
      projectId: process.env.STORAGE_PROJECT_ID,
      credentials: {
        client_email: process.env.STORAGE_CLIENT_EMAIL,
        private_key: process.env.STORAGE_PRIVATE_KEY,
      },
    });
    this.bucket = this.storage.bucket(process.env.STORAGE_MEDIA_BUCKET);
  }

  private async saveImageToStorage(
    uploadedFile: FileUpload,
    filePath: string,
  ): Promise<void> {
    const file = this.storage.bucket(this.bucket.name).file(filePath);
    try {
      const stream = uploadedFile.createReadStream();
      const chunks = [];

      const buffer = await new Promise<Buffer>((resolve, reject) => {
        let buffer: Buffer;
        stream.on('data', (chunk) => {
          chunks.push(chunk);
        });
        stream.on('end', () => {
          buffer = Buffer.concat(chunks);
          resolve(buffer);
        });
      });

      await file.save(buffer, {
        contentType: uploadedFile.mimetype,
      });
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async uploadImage(uploadedFile: FileUpload, filePath: string) {
    await this.saveImageToStorage(uploadedFile, filePath);
    const STORAGE_URL = process.env.STORAGE_URL;

    return `${STORAGE_URL}/${this.bucket.name}/${filePath}`;
  }

  async deleteImage(filePath: string): Promise<void> {
    const options: DeleteFileOptions = {
      // オブジェクトが存在しない場合エラーにするかどうか
      ignoreNotFound: true,
    };
    try {
      await this.storage
        .bucket(this.bucket.name)
        .file(filePath)
        .delete(options);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
