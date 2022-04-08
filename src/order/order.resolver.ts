import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { AuthenticateGuard } from 'src/common/guards/authenticate.guard';
import { CreateOrderInput } from './dto/create-order.input';
import { RemoveOrderInput } from './dto/remove-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './models/order.model';
import { OrderService } from './order.service';

@Resolver(() => Order)
@UseGuards(AuthenticateGuard)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  createOrder(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ) {
    return this.orderService.create(createOrderInput, userId);
  }

  @Query(() => [Order], { name: 'orders' })
  findAll(@GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string) {
    return this.orderService.findAll(userId);
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.orderService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('removeOrderInput') removeOrderInput: RemoveOrderInput,
  ) {
    return this.orderService.remove(removeOrderInput, userId);
  }
}
