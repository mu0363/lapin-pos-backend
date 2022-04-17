import { InputType, Field, Int } from '@nestjs/graphql';
import { Max, MaxLength } from 'class-validator';

@InputType()
export class RemoveItemInput {
  @Field(() => Int)
  @Max(1000)
  id: number;

  @MaxLength(255)
  itemUrl: string;
}
