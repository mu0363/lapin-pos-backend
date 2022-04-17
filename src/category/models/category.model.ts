import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => Int)
  id: number;

  categoryName: string;
  userId?: string;

  createdAt: Date;
  updatedAt: Date;
}
