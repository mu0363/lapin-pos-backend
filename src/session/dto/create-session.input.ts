import { InputType, Field, Int } from '@nestjs/graphql';
import { Max } from 'class-validator';

@InputType()
export class CreateSessionInput {
  @Field(() => Int)
  @Max(1000)
  customerId: number;

  @Field(() => Int)
  @Max(1000)
  castId: number;

  @Field(() => Int)
  @Max(1000)
  planId: number;
}
