import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, Max, MaxLength, IsDate, IsOptional } from 'class-validator';

@InputType()
export class CreateCustomerInput {
  @MaxLength(100)
  customerKana: string;

  @MaxLength(100)
  customerName: string;

  @IsDate()
  @IsOptional()
  birthDay?: Date;

  @MaxLength(100)
  @IsOptional()
  receipt?: string;

  @Field(() => Int)
  @IsInt()
  @Max(1000)
  @IsOptional()
  castId?: number;
}
