import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Item, Session } from '@prisma/client';
import { Item as ItemModel } from 'src/item/models/item.model';
import { Session as SessionModel } from 'src/session/models/session.model';

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number;

  @Field(() => ItemModel)
  item: Item;

  @Field(() => SessionModel, { nullable: true })
  session?: Session;

  @Field(() => Int)
  count: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  itemId: number;

  userId?: string;
  createdAt: Date;
  updatedAt: Date;
}
