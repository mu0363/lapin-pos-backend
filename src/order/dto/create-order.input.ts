import { InputType, Int, Field } from '@nestjs/graphql';
import { Max } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  @Max(1000)
  count: number;

  @Field(() => Int)
  @Max(10000000)
  total: number;

  @Field(() => Int)
  @Max(10000000)
  sessionId: number;

  @Field(() => Int)
  @Max(1000)
  itemId: number;
}
