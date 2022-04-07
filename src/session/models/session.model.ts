import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cast, Customer, Order, Plan } from '@prisma/client';
import { Cast as CastModel } from 'src/cast/models/cast.model';
import { Customer as CustomerModel } from 'src/customer/models/customer.model';
import { Order as OrderModel } from 'src/order/models/order.model';
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

  @Field(() => [OrderModel], { nullable: true })
  order?: Order;

  @Field(() => Int)
  customerId: number;

  @Field(() => Int)
  castId: number;

  @Field(() => Int)
  planId: number;

  userId?: string;
  enteredAt: Date;
  exitedAt: Date;
}
