import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Max } from 'class-validator';
import { CreateOrderInput } from './create-order.input';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field(() => Int)
  @IsInt()
  @Max(1000)
  count: number;

  @Field(() => Int)
  @IsInt()
  @Max(10000000)
  total: number;

  @Field(() => Int)
  @IsInt()
  @Max(10000000)
  sessionId: number;

  @Field(() => Int)
  @IsInt()
  @Max(1000)
  itemId: number;
}
