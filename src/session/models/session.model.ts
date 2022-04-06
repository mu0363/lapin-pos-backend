import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cast, Customer, Plan } from '@prisma/client';
import { Cast as CastModel } from 'src/cast/models/cast.model';
import { Customer as CustomerModel } from 'src/customer/models/customer.model';
import { Plan as PlanModel } from 'src/plan/models/plan.model';

@ObjectType()
export class Session {
  @Field(() => Int)
  id: number;

  @Field(() => CustomerModel, { nullable: true })
  customer: Customer;

  @Field(() => CastModel, { nullable: true })
  cast: Cast;

  @Field(() => PlanModel, { nullable: true })
  plan: Plan;

  customerId: string;
  castId: string;
  planId: string;
  userId?: string;
  enteredAt: Date;
  exitedAt: Date;
}
