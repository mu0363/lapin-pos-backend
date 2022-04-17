import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { RemoveCustomerInput } from './dto/remove-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCustomerInput: CreateCustomerInput, userId: string) {
    return this.prisma.customer.create({
      data: { ...createCustomerInput, userId },
      include: {
        cast: true,
      },
    });
  }

  async findAll(userId) {
    return this.prisma.customer.findMany({ where: { userId } });
  }

  update(updateCustomerInput: UpdateCustomerInput, userId: string) {
    return this.prisma.customer.update({
      where: {
        id_userId: {
          id: updateCustomerInput.id,
          userId,
        },
      },
      data: updateCustomerInput,
      include: {
        cast: true,
      },
    });
  }

  remove(removeCustomerInput: RemoveCustomerInput, userId: string) {
    return this.prisma.customer.delete({
      where: { id_userId: { id: removeCustomerInput.id, userId } },
      include: {
        cast: true,
      },
    });
  }
}
