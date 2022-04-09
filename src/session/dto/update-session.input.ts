import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Max } from 'class-validator';
import { CreateSessionInput } from './create-session.input';

@InputType()
export class UpdateSessionInput extends PartialType(CreateSessionInput) {
  @Field(() => Int)
  @IsInt()
  @Max(1000)
  id: number;

  @Field(() => Int)
  @IsInt()
  @Max(1000)
  planId: number;
}
