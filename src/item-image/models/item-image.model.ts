import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Max, MaxLength } from 'class-validator';

@ObjectType()
export class ItemImage {
  @Field(() => Int)
  @Max(1000)
  itemId: string;

  @Field()
  @MaxLength(255)
  itemImageUrl: string;
}
