import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { CustomerService } from './customer.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { RemoveCustomerInput } from './dto/remove-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer } from './models/customer.model';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => Customer)
  createCustomer(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return this.customerService.create(createCustomerInput, userId);
  }

  @Query(() => [Customer], { name: 'customers' })
  findAll(@GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string) {
    return this.customerService.findAll(userId);
  }

  @Mutation(() => Customer)
  updateCustomer(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ) {
    return this.customerService.update(updateCustomerInput, userId);
  }

  @Mutation(() => Customer)
  removeCustomer(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('removeCustomerInput') removeCustomerInput: RemoveCustomerInput,
  ) {
    return this.customerService.remove(removeCustomerInput, userId);
  }
}
