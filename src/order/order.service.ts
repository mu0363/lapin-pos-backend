import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createOrderInput: CreateOrderInput) {
    // prisma schemaに以下を追加
    // previewFeatures = ["interactiveTransactions"]
    return await this.prisma.$transaction(async (prisma) => {
      const initialOrder = await prisma.order.create({
        data: createOrderInput,
      });
      const orderItem = await prisma.item.findUnique({
        where: { id: initialOrder.itemId },
      });
      return await prisma.order.update({
        where: { id: initialOrder.id },
        data: { count: orderItem.price },
      });
    });
  }

  findAll() {
    return this.prisma.order.findMany();
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
