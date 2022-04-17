import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, MaxLength } from 'class-validator';

@InputType()
export class CreatePlanInput {
  @MaxLength(100)
  planName: string;

  @Field(() => Int)
  @Max(100000)
  price: number;
}
