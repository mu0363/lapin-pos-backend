import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field(() => Int)
  id: number;

  itemName: string;
  itemUrl: string;

  @Field(() => Int)
  categoryId: number;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  stock: number;

  @Field(() => Int)
  cost: number;

  createdAt: Date;
  updatedAt: Date;
}
