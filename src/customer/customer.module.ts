import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';

@Module({
  providers: [CustomerResolver, CustomerService, PrismaService, UserService],
})
export class CustomerModule {}
