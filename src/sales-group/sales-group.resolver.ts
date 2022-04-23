import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { AuthenticateGuard } from 'src/common/guards/authenticate.guard';
import { CreateSalesGroupInput } from './dto/create-sales-group.input';
import { UpdateSalesGroupInput } from './dto/update-sales-group.input';
import { SalesGroup } from './models/sales-group.model';
import { SalesGroupService } from './sales-group.service';

@Resolver(() => SalesGroup)
@UseGuards(AuthenticateGuard)
export class SalesGroupResolver {
  constructor(private readonly salesGroupService: SalesGroupService) {}

  @Mutation(() => SalesGroup)
  createSalesGroup(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args({
      name: 'createSalesGroupInput',
      type: () => [CreateSalesGroupInput],
    })
    createSaleOrderInput: CreateSalesGroupInput[],
  ) {
    return this.salesGroupService.create(createSaleOrderInput, userId);
  }

  @Query(() => [SalesGroup], { name: 'salesGroups' })
  findAll(@GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string) {
    return this.salesGroupService.findAll(userId);
  }

  @Query(() => SalesGroup, { name: 'salesGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.salesGroupService.findOne(id);
  }

  @Mutation(() => SalesGroup)
  updateSalesGroup(
    @Args('updateSalesGroupInput') updateSalesGroupInput: UpdateSalesGroupInput,
  ) {
    return this.salesGroupService.update(
      updateSalesGroupInput.id,
      updateSalesGroupInput,
    );
  }

  @Mutation(() => SalesGroup)
  removeSalesGroup(@Args('id', { type: () => Int }) id: number) {
    return this.salesGroupService.remove(id);
  }
}
