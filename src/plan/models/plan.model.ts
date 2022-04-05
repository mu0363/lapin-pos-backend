import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Plan {
  @Field(() => Int)
  id: number;
  planName: string;
  createdAt: Date;
  updatedAt: Date;
}
