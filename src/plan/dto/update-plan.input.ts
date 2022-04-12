import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { Max, MaxLength } from 'class-validator';
import { CreatePlanInput } from './create-plan.input';

@InputType()
export class UpdatePlanInput extends PartialType(CreatePlanInput) {
  @Field(() => Int)
  @Max(1000)
  id: number;

  @MaxLength(100)
  planName?: string;

  @Field(() => Int)
  @Max(100000)
  price?: number;
}
