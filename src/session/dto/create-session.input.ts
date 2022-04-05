import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateSessionInput {
  @Field(() => Int)
  customerId: number;
  @Field(() => Int)
  castId: number;
  @Field(() => Int)
  planId: number;
  enteredAt: Date;
  exitedAtDate: Date;
}
