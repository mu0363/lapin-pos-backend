import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;
  uid: string;
  isAdmin: boolean;
  username: string;
  email: string;
  avatarUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
