import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PrismaService } from './../prisma.service';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';

@Module({
  providers: [CategoryResolver, CategoryService, PrismaService, UserService],
})
export class CategoryModule {}
