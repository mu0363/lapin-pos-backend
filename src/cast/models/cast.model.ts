import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cast {
  @Field(() => Int)
  id: number;
  castName: string;
  castKana: string;
  castIcon: string;
  createdAt: Date;
  updatedAt: Date;
}
