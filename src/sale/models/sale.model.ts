import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SaleOrder } from '@prisma/client';
import { SaleOrder as SaleOrderModel } from './sale-order.model';

@ObjectType()
export class Sale {
  @Field(() => Int)
  id: number;

  customerName: string;
  customerKana: string;
  receipt?: string;
  castName: string;
  planName: string;

  @Field(() => Int)
  planPrice: number;

  enteredAt: Date;
  exitedAt: Date;

  @Field(() => Int)
  totalTime: number;

  @Field(() => Int)
  extendedTime: number;

  @Field(() => Int)
  extendedPrice: number;

  @Field(() => Int)
  subtotal: number;

  @Field(() => Int)
  servicePrice: number;

  @Field(() => Int)
  taxPrice: number;

  @Field(() => Int)
  totalPrice: number;

  isCreditCard: boolean;

  userId?: string;

  createdAt: Date;
  updatedAt: Date;

  @Field(() => [SaleOrderModel])
  saleOrder?: SaleOrder;
}
