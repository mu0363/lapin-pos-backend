import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, Max, MaxLength } from 'class-validator';

@InputType()
export class CreatePlanInput {
  @IsNotEmpty()
  @MaxLength(100)
  planName: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  @Max(100000)
  price: number;
}
