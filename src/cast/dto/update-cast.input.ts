import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, Max, MaxLength } from 'class-validator';
import { CreateCastInput } from './create-cast.input';

@InputType()
export class UpdateCastInput extends PartialType(CreateCastInput) {
  @Field(() => Int)
  @Max(100)
  id: number;

  @MaxLength(100)
  @IsOptional()
  castName?: string;

  @MaxLength(100)
  @IsOptional()
  castKana?: string;

  @MaxLength(10)
  @IsOptional()
  castIcon?: string;
}
