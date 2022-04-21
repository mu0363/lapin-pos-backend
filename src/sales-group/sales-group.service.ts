import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSalesGroupInput } from './dto/create-sales-group.input';
import { UpdateSalesGroupInput } from './dto/update-sales-group.input';

@Injectable()
export class SalesGroupService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSalesGroupInput: CreateSalesGroupInput[], userId: string) {
    // まず本日全体のセールスグループを作成
    const currentSalesGroup = await this.prisma.salesGroup.create({
      data: { userId },
      include: { sale: true, user: true },
    });
    const result = await Promise.all(
      createSalesGroupInput.map(async (salesGroup) => {
        // セールを作成
        const saleRes = await this.prisma.sale.create({
          data: {
            ...salesGroup.createSaleInput,
            salesGroupId: currentSalesGroup.id,
            userId,
          },
          include: { saleOrder: true },
        });
        // sale内のordersを作成
        await this.prisma.saleOrder.createMany({
          data: salesGroup.createSaleOrderInput.map((saleOrder) => {
            return { ...saleOrder, saleId: saleRes.id };
          }),
        });
        return saleRes;
      }),
    );

    return currentSalesGroup;
    // return this.prisma.$transaction(async (prisma) => {
    //   // まず本日全体のセールスグループを作成
    //   const currentSalesGroup = await prisma.salesGroup.create({
    //     data: { userId },
    //   });
    //   const salesRes = await createSalesGroupInput.map(async (salesGroup) => {
    //     // セールを作成
    //     const saleRes = await prisma.sale.create({
    //       data: {
    //         ...salesGroup.createSaleInput,
    //         salesGroupId: currentSalesGroup.id,
    //         userId,
    //       },
    //       include: { saleOrder: true },
    //     });
    //     // sale内のordersを作成
    //     await prisma.saleOrder.createMany({
    //       data: salesGroup.createSaleOrderInput.map((saleOrder) => {
    //         return { ...saleOrder, saleId: saleRes.id };
    //       }),
    //     });
    //     return saleRes;
    //   });
    //   // await prisma.salesGroup.update({
    //   //   where: { id_userId: { id: currentSalesGroup.id, userId } },
    //   //   data: { sale: salesRes },
    //   // });
    //   return currentSalesGroup;
    // });
  }

  findAll(userId: string) {
    return this.prisma.salesGroup.findMany({
      where: { userId },
      include: { sale: { include: { saleOrder: true } } },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} salesGroup`;
  }

  update(id: number, updateSalesGroupInput: UpdateSalesGroupInput) {
    return `This action updates a #${id} salesGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesGroup`;
  }
}
