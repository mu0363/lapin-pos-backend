import { InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class CreateCastInput {
  @MaxLength(100)
  castName: string;

  @MaxLength(100)
  castKana: string;

  @MaxLength(10)
  castIcon: string;
}
