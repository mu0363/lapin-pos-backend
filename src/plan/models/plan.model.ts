import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Plan {
  @Field(() => Int)
  id: number;

  planName: string;

  @Field(() => Int)
  price: number;

  createdAt: Date;
  updatedAt: Date;
}
