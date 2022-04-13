import { Module } from '@nestjs/common';
import { CloudStorageService } from 'src/cloud-storage.service';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { ItemImageResolver } from './item-image.resolver';
import { ItemImageService } from './item-image.service';

@Module({
  providers: [
    ItemImageResolver,
    ItemImageService,
    UserService,
    PrismaService,
    CloudStorageService,
  ],
})
export class ItemImageModule {}
