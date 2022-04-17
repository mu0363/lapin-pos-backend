import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, Max, MaxLength } from 'class-validator';
import { CreateItemInput } from './create-item.input';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @Field(() => Int)
  @Max(1000)
  id: number;

  @MaxLength(100)
  @IsOptional()
  itemName?: string;

  @MaxLength(255)
  @IsOptional()
  itemUrl?: string;

  @Field(() => Int)
  @Max(1000)
  @IsOptional()
  categoryId?: number;

  @Field(() => Int)
  @Max(1000000)
  @IsOptional()
  price?: number;

  @Field(() => Int)
  @Max(1000)
  @IsOptional()
  stock?: number;

  @Field(() => Int)
  @Max(1000000)
  @IsOptional()
  cost?: number;
}
