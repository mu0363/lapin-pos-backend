import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, Max } from 'class-validator';

@InputType()
export class CreateSessionInput {
  @Field(() => Int)
  @IsInt()
  @Max(1000)
  customerId: number;

  @Field(() => Int)
  @IsInt()
  @Max(1000)
  castId: number;

  @Field(() => Int)
  @IsInt()
  @Max(1000)
  planId: number;
}
