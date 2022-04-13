import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, Max } from 'class-validator';

@InputType()
export class RemoveCastInput {
  @Field(() => Int)
  @IsInt()
  @Max(1000)
  id: number;
}
