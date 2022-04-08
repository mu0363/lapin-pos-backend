import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { RemoveOrderInput } from './dto/remove-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOrderInput: CreateOrderInput, userId: string) {
    return this.prisma.order.create({
      data: { ...createOrderInput, userId },
      include: {
        item: true,
        session: true,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        item: true,
        session: true,
      },
    });
  }

  update(updateOrderInput: UpdateOrderInput, userId: string) {
    return this.prisma.order.update({
      where: {
        id_userId: {
          id: updateOrderInput.id,
          userId,
        },
      },
      data: {
        count: updateOrderInput.count,
        total: updateOrderInput.total,
      },
      include: {
        item: true,
        session: true,
      },
    });
  }

  remove(removeOrderInput: RemoveOrderInput, userId: string) {
    return this.prisma.order.delete({
      where: {
        id_userId: {
          id: removeOrderInput.id,
          userId,
        },
      },
      include: {
        item: true,
        session: true,
      },
    });
  }
}
