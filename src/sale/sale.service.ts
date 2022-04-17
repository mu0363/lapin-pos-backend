import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSaleOrderInput } from './dto/create-sale-order.input';
import { CreateSaleInput } from './dto/create-sale.input';
import { UpdateSaleInput } from './dto/update-sale.input';

@Injectable()
export class SaleService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createSaleInput: CreateSaleInput,
    createSaleOrdersInput: CreateSaleOrderInput[],
    userId: string,
  ) {
    return this.prisma.$transaction(async (prisma) => {
      // まずセールを作成
      const saleRes = await prisma.sale.create({
        data: { ...createSaleInput, userId },
        include: { saleOrder: true },
      });

      // sale内のordersを作成
      await prisma.saleOrder.createMany({
        data: createSaleOrdersInput.map((saleOrder) => {
          return { ...saleOrder, saleId: saleRes.id };
        }),
      });

      return saleRes;
    });
  }

  findAll(userId: string) {
    return this.prisma.sale.findMany({
      where: { userId },
      orderBy: [{ exitedAt: 'desc' }],
      include: {
        saleOrder: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleInput: UpdateSaleInput) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
