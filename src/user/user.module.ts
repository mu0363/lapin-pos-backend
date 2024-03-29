import { Module } from '@nestjs/common';
import { CloudStorageService } from 'src/cloud-storage.service';
import { PrismaService } from './../prisma.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserResolver, UserService, PrismaService, CloudStorageService],
})
export class UserModule {}
