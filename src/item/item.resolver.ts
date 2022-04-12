import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { AuthenticateGuard } from 'src/common/guards/authenticate.guard';
import { CreateItemInput } from './dto/create-item.input';
import { RemoveItemInput } from './dto/remove-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { ItemService } from './item.service';
import { Item } from './models/item.model';

@Resolver(() => Item)
@UseGuards(AuthenticateGuard)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Mutation(() => Item)
  createItem(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('createItemInput') createItemInput: CreateItemInput,
  ) {
    return this.itemService.create(createItemInput, userId);
  }

  @Query(() => [Item], { name: 'items' })
  findAll(@GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string) {
    return this.itemService.findAll(userId);
  }

  @Mutation(() => Item)
  updateItem(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('updateItemInput') updateItemInput: UpdateItemInput,
  ) {
    return this.itemService.update(updateItemInput, userId);
  }

  @Mutation(() => Item)
  removeItem(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('removeItemInput') removeItemInput: RemoveItemInput,
  ) {
    return this.itemService.remove(removeItemInput, userId);
  }
}
