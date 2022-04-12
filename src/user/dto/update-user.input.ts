import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  @IsOptional()
  isAdmin?: boolean;

  @IsOptional()
  username?: string;

  @IsOptional()
  avatarUrl?: string;
}
