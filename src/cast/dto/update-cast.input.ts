import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { CreateCastInput } from './create-cast.input';

@InputType()
export class UpdateCastInput extends PartialType(CreateCastInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @MaxLength(100)
  @IsOptional()
  castName?: string;

  @IsNotEmpty()
  @MaxLength(100)
  @IsOptional()
  castKana?: string;

  @IsNotEmpty()
  @MaxLength(10)
  @IsOptional()
  castIcon?: string;
}
