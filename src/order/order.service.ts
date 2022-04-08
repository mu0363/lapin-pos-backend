import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}
  create(createOrderInput: CreateOrderInput) {
    // prisma schemaに以下を追加
    // previewFeatures = ["interactiveTransactions"]
    return this.prisma.order.create({
      data: createOrderInput,
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

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
