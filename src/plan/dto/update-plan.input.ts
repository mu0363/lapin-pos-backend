import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, Max, MaxLength } from 'class-validator';
import { CreatePlanInput } from './create-plan.input';

@InputType()
export class UpdatePlanInput extends PartialType(CreatePlanInput) {
  @Field(() => Int)
  @Max(1000)
  id: number;

  @MaxLength(100)
  @IsOptional()
  planName?: string;

  @Field(() => Int)
  @Max(100000)
  @IsOptional()
  price?: number;
}
