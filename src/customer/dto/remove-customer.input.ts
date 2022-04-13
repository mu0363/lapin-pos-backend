import { InputType, Field, Int } from '@nestjs/graphql';
import { Max } from 'class-validator';

@InputType()
export class RemoveCustomerInput {
  @Field(() => Int)
  @Max(1000)
  id: number;
}
