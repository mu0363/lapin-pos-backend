import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Max,
  MaxLength,
} from 'class-validator';
import { CreateCustomerInput } from './create-customer.input';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  id: number;

  @MaxLength(100)
  @IsOptional()
  customerKana?: string;

  @MaxLength(100)
  @IsOptional()
  customerName?: string;

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
