import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SaleService } from 'src/sale/sale.service';
import { UserService } from 'src/user/user.service';
import { SalesGroupResolver } from './sales-group.resolver';
import { SalesGroupService } from './sales-group.service';

@Module({
  providers: [
    SalesGroupResolver,
    SalesGroupService,
    SaleService,
    PrismaService,
    UserService,
  ],
})
export class SalesGroupModule {}
