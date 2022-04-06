import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cast, Customer, Plan } from '@prisma/client';
import { Cast as CastModel } from 'src/cast/models/cast.model';
import { Customer as CustomerModel } from 'src/customer/models/customer.model';
import { Plan as PlanModel } from 'src/plan/models/plan.model';

@ObjectType()
export class Session {
  @Field(() => Int)
  id: number;

  @Field(() => CustomerModel)
  customer: Customer;

  @Field(() => CastModel)
  cast: Cast;

  @Field(() => PlanModel)
  plan: Plan;

  customerId: string;
  castId: string;
  planId: string;
  userId?: string;
  enteredAt: Date;
  exitedAt: Date;
}
