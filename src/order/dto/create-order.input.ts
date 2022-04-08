import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, Max, IsUUID, MaxLength } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  @IsInt()
  @Max(1000)
  count: number;

  @Field(() => Int)
  @IsInt()
  @Max(10000000)
  total: number;

  @Field(() => Int)
  @IsInt()
  @Max(10000000)
  sessionId: number;

  @Field(() => Int)
  @IsInt()
  @Max(1000)
  itemId: number;

  @Field()
  @IsUUID()
  @MaxLength(50)
  userId: string;
}