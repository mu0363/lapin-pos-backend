import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Max } from 'class-validator';
import { CreateCategoryInput } from './create-category.input';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => Int)
  @Max(100)
  id: number;
}
