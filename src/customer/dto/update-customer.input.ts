import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsDate, IsOptional, Max, MaxLength } from 'class-validator';
import { CreateCustomerInput } from './create-customer.input';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @Field(() => Int)
  @Max(100)
  id: number;

  @MaxLength(100)
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

  @Max(1000)
  @IsOptional()
  castId?: number;
}
