import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsOptional, Max, MaxLength, IsBoolean } from 'class-validator';

@InputType()
export class CreateSaleInput {
  @MaxLength(255)
  customerName: string;

  @MaxLength(255)
  customerKana: string;

  @MaxLength(255)
  @IsOptional()
  receipt?: string;

  @MaxLength(255)
  castName: string;

  @MaxLength(255)
  planName: string;

  @Field(() => Int)
  @Max(100000)
  planPrice: number;

  @IsDate()
  enteredAt: Date;

  @IsDate()
  exitedAt: Date;

  @Field(() => Int)
  @Max(1000)
  totalTime: number;

  @Field(() => Int)
  @Max(1000)
  extendedTime: number;

  @Field(() => Int)
  @Max(100000)
  extendedPrice: number;

  @Field(() => Int)
  @Max(10000000)
  subtotal: number;

  @Field(() => Int)
  @Max(100000)
  servicePrice: number;

  @Field(() => Int)
  @Max(100000)
  taxPrice: number;

  @Field(() => Int)
  @Max(10000000)
  totalPrice: number;

  @Field(() => Int)
  @Max(10000000)
  sessionId: number;

  @IsBoolean()
  isCreditCard: boolean;
}
