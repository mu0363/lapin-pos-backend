import { InputType, Field, Int } from '@nestjs/graphql';
import { Max } from 'class-validator';

@InputType()
export class RemoveItemInput {
  @Field(() => Int)
  @Max(1000)
  id: number;
}
