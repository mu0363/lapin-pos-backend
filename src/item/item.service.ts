import { parse } from 'path';
import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { CloudStorageService } from 'src/cloud-storage.service';
import { PrismaService } from 'src/prisma.service';
import { CreateItemInput } from './dto/create-item.input';
import { RemoveItemInput } from './dto/remove-item.input';
import { UpdateItemInput } from './dto/update-item.input';

@Injectable()
export class ItemService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudStorageService: CloudStorageService,
  ) {}
  async create(
    createItemInput: CreateItemInput,
    userId: string,
    itemImage: FileUpload,
  ) {
    // ファイルのアップロード先パス名
    const fileExtension = parse(itemImage.filename).ext;
    const newFilename = `${userId}/${Date.now()}${fileExtension}`;
    const filePath = `item/${newFilename}`;

    const uploadedImageUrl = await this.cloudStorageService.uploadImage(
      itemImage,
      filePath,
    );

    return this.prisma.item.create({
      data: { ...createItemInput, userId, itemUrl: uploadedImageUrl },
      include: {
        category: true,
        user: true,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.item.findMany({
      where: { userId },
      include: {
        category: true,
        user: true,
      },
    });
  }

  findOne(id: number, userId: string) {
    return this.prisma.item.findUnique({
      where: { id_userId: { id, userId } },
    });
  }

  async update(
    updateItemInput: UpdateItemInput,
    userId: string,
    itemImage?: FileUpload,
  ) {
    let uploadedImageUrl: string;
    const targetItem = await this.findOne(updateItemInput.id, userId);

    if (itemImage) {
      // ファイルのアップロード先パス名
      const fileExtension = parse(itemImage.filename).ext;
      const newFilename = `${userId}/${Date.now()}${fileExtension}`;
      const filePath = `item/${newFilename}`;

      // 新規画像をアップロード
      uploadedImageUrl = await this.cloudStorageService.uploadImage(
        itemImage,
        filePath,
      );

      // 既存の画像を削除
      const bucketName = process.env.STORAGE_MEDIA_BUCKET;
      const arrayString = targetItem.itemUrl.split(`${bucketName}/`);
      await this.cloudStorageService.deleteImage(arrayString[1]);
    }
    return this.prisma.item.update({
      where: { id_userId: { id: updateItemInput.id, userId } },
      data: {
        ...updateItemInput,
        userId,
        itemUrl: uploadedImageUrl ? uploadedImageUrl : targetItem.itemUrl,
      },
      include: {
        category: true,
        user: true,
      },
    });
  }

  async remove(removeItemInput: RemoveItemInput, userId: string) {
    const bucketName = process.env.STORAGE_MEDIA_BUCKET;
    const arrayString = removeItemInput.itemUrl.split(`${bucketName}/`);
    await this.cloudStorageService.deleteImage(arrayString[1]);
    return this.prisma.item.delete({
      where: { id_userId: { id: removeItemInput.id, userId } },
      include: {
        category: true,
        user: true,
      },
    });
  }
}
