import { InputType, Int, Field } from '@nestjs/graphql';
import { Max, MaxLength } from 'class-validator';

@InputType()
export class CreateItemInput {
  @MaxLength(100)
  itemName: string;

  @MaxLength(255)
  itemUrl: string;

  @Field(() => Int)
  @Max(1000)
  categoryId: number;

  @Field(() => Int)
  @Max(1000000)
  price: number;

  @Field(() => Int)
  @Max(1000)
  stock: number;

  @Field(() => Int)
  @Max(1000000)
  cost: number;
}
