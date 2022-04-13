import { parse } from 'path';
import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { CloudStorageService } from 'src/cloud-storage.service';

@Injectable()
export class ItemImageService {
  constructor(private readonly cloudStorageService: CloudStorageService) {}
  async uploadItemImage(itemImage: FileUpload, itemId: number, userId: string) {
    // ファイルのアップロード先パス名
    const fileExtension = parse(itemImage.filename).ext;
    const newFilename = `${userId}/${Date.now()}${fileExtension}`;
    const filePath = `item/${newFilename}`;

    const uploadedRes = await this.cloudStorageService.uploadImage(
      itemImage,
      filePath,
    );
    return uploadedRes;
  }

  remove() {
    return `This action removes a itemImage`;
  }
}
