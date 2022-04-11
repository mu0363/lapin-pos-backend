import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cast } from '@prisma/client';
import { Cast as CastModel } from 'src/cast/models/cast.model';

@ObjectType()
export class Customer {
  @Field(() => Int)
  id: number;

  customerKana: string;
  customerName: string;

  birthDay?: Date;

  receipt?: string;

  @Field(() => CastModel)
  cast?: Cast;

  @Field(() => Int)
  castId?: number;

  lastVisitDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
