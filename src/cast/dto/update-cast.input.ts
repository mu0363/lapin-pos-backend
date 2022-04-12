import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
import { CreateCastInput } from './create-cast.input';

@InputType()
export class UpdateCastInput extends PartialType(CreateCastInput) {
  @Field(() => Int)
  id: number;

  @MaxLength(100)
  castName?: string;

  @MaxLength(100)
  castKana?: string;

  @MaxLength(10)
  castIcon?: string;
}
