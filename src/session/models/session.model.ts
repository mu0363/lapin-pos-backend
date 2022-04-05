import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Session {
  @Field(() => Int)
  id: number;
  customerId: string;
  castId: string;
  planId: string;
  userId?: string;
  enteredAt: Date;
  exitedAt: Date;
}
