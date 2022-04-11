import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateCastInput {
  @IsNotEmpty()
  @MaxLength(100)
  castName: string;

  @IsNotEmpty()
  @MaxLength(100)
  castKana: string;

  @IsNotEmpty()
  @MaxLength(10)
  castIcon: string;
}
