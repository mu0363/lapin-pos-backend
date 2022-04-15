import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SaleResolver } from './sale.resolver';
import { SaleService } from './sale.service';

@Module({
  providers: [SaleResolver, SaleService, PrismaService],
})
export class SaleModule {}
