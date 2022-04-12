import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';

@Module({
  providers: [ItemResolver, ItemService, PrismaService, UserService],
})
export class ItemModule {}
