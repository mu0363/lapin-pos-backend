import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, Max, MaxLength } from 'class-validator';

@InputType()
export class CreateSaleOrderInput {
  @MaxLength(100)
  itemName: string;

  @Field(() => Int)
  @Max(1000000)
  itemPrice: number;

  @Field(() => Int)
  @Max(1000)
  itemCount: number;

  @Field(() => Int)
  @Max(10000)
  @IsOptional()
  saleId?: number;

  @MaxLength(100)
  @IsOptional()
  userId?: string;
}
