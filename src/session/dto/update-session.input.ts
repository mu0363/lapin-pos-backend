import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Max, IsBoolean, IsOptional, IsDate } from 'class-validator';
import { CreateSessionInput } from './create-session.input';

@InputType()
export class UpdateSessionInput extends PartialType(CreateSessionInput) {
  @Field(() => Int)
  @Max(1000)
  id: number;

  @Field(() => Int)
  @Max(1000)
  @IsOptional()
  planId?: number;

  @IsBoolean()
  @IsOptional()
  isChecked?: boolean;

  @IsDate()
  @IsOptional()
  exitedAt?: Date;

  @Field(() => Int)
  @Max(1000)
  @IsOptional()
  totalTime?: number;

  @Field(() => Int)
  @Max(1000)
  @IsOptional()
  extendedTime?: number;

  @Field(() => Int)
  @Max(100000)
  @IsOptional()
  extendedPrice?: number;

  @Field(() => Int)
  @Max(10000000)
  @IsOptional()
  subtotal?: number;

  @Field(() => Int)
  @Max(100000)
  @IsOptional()
  servicePrice?: number;

  @Field(() => Int)
  @Max(100000)
  @IsOptional()
  taxPrice?: number;

  @Field(() => Int)
  @Max(10000000)
  @IsOptional()
  totalPrice?: number;
}
