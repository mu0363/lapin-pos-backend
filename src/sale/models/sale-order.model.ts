import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SaleOrder {
  @Field(() => Int)
  id: number;

  itemName: string;

  @Field(() => Int)
  itemPrice: number;

  @Field(() => Int)
  itemCount: number;

  @Field(() => Int)
  saleId?: number;

  userId?: string;
}
