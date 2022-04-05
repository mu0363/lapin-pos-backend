import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field(() => Int)
  id: number;
  customerKana: string;
  customerName: string;
  birthDay: Date;
  receipt: string;
  castId: string;
  createdAt: Date;
  updatedAt: Date;
}