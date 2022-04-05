import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';

@Module({
  providers: [ItemResolver, ItemService, PrismaService],
})
export class ItemModule {}
