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

  enteredAt: Date;
  exitedAt: Date;
  isChecked: boolean;

  @Field(() => Int)
  totalTime: number;

  @Field(() => Int)
  extendedTime: number;

  @Field(() => Int)
  extendedPrice: number;

  @Field(() => Int)
  subtotal: number;

  @Field(() => Int)
  servicePrice: number;

  @Field(() => Int)
  taxPrice: number;

  @Field(() => Int)
  totalPrice: number;

  @Field(() => [OrderModel], { nullable: true })
  order?: Order;

  @Field(() => CustomerModel)
  customer: Customer;

  @Field(() => Int)
  customerId: number;

  @Field(() => CastModel)
  cast: Cast;

  @Field(() => Int)
  castId: number;

  @Field(() => PlanModel)
  plan: Plan;

  @Field(() => Int)
  planId: number;

  userId?: string;
}
