import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  uid: string;
  username: string;
  email: string;
  avatarUrl: string;
  isAdmin: boolean;
}
