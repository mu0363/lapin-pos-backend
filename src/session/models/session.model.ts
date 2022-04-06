import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Customer } from '@prisma/client';

@ObjectType()
export class Session {
  @Field(() => Int)
  id: number;
  customer: Customer[];
  customerId: string;
  castId: string;
  planId: string;
  userId?: string;
  enteredAt: Date;
  exitedAt: Date;
}
