import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Max } from 'class-validator';
import { CreateSessionInput } from './create-session.input';

@InputType()
export class UpdateSessionInput extends PartialType(CreateSessionInput) {
  @Field(() => Int)
  @Max(1000)
  id: number;

  @Field(() => Int)
  @Max(1000)
  planId: number;
}
