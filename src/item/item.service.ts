import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateItemInput } from './dto/create-item.input';
import { RemoveItemInput } from './dto/remove-item.input';
import { UpdateItemInput } from './dto/update-item.input';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}
  create(createItemInput: CreateItemInput, userId: string) {
    return this.prisma.item.create({
      data: { ...createItemInput, userId },
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

  update(updateItemInput: UpdateItemInput, userId: string) {
    return this.prisma.item.update({
      where: { id_userId: { id: updateItemInput.id, userId } },
      data: { ...updateItemInput, userId },
      include: {
        category: true,
        user: true,
      },
    });
  }

  remove(removeItemInput: RemoveItemInput, userId: string) {
    return this.prisma.item.delete({
      where: { id_userId: { id: removeItemInput.id, userId } },
      include: {
        category: true,
        user: true,
      },
    });
  }
}
