import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSessionInput {
  @Field()
  customerId: string;
  castId: string;
  enteredAt: Date;
  exitedAtDate: Date;
}
