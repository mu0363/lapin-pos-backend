import { InputType } from '@nestjs/graphql';
import {
  IsInt,
  Max,
  MaxLength,
  IsNotEmpty,
  IsDate,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreateCustomerInput {
  @IsNotEmpty()
  @MaxLength(100)
  customerKana: string;

  @IsNotEmpty()
  @MaxLength(100)
  customerName: string;

  @IsDate()
  @IsOptional()
  birthDay?: Date;

  @MaxLength(100)
  @IsOptional()
  receipt?: string;

  @IsInt()
  @Max(1000)
  @IsOptional()
  castId?: number;
}
