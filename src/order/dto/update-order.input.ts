import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, Max, Min } from 'class-validator';
import { CreateOrderInput } from './create-order.input';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => Int)
  @Max(100)
  id: number;

  @Field(() => Int)
  @Max(1000)
  @Min(0)
  @IsOptional()
  count?: number;

  @Field(() => Int)
  @Max(10000000)
  @Min(0)
  @IsOptional()
  total?: number;

  @Field(() => Int)
  @Max(10000000)
  @IsOptional()
  sessionId?: number;

  @Field(() => Int)
  @Max(1000)
  @IsOptional()
  itemId?: number;
}
