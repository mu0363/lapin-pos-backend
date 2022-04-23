import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Sale } from '@prisma/client';
import { Sale as SaleModel } from 'src/sale/models/sale.model';

@ObjectType()
export class SalesGroup {
  @Field(() => Int)
  id: number;

  @Field(() => [SaleModel])
  sale?: Sale;

  userId?: string;

  createdAt: Date;
  updatedAt: Date;
}
