import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { AuthenticateGuard } from 'src/common/guards/authenticate.guard';
import { CastService } from './cast.service';
import { CreateCastInput } from './dto/create-cast.input';
import { RemoveCastInput } from './dto/remove-cast.input';
import { UpdateCastInput } from './dto/update-cast.input';
import { Cast } from './models/cast.model';

@Resolver(() => Cast)
@UseGuards(AuthenticateGuard)
export class CastResolver {
  constructor(private readonly castService: CastService) {}

  @Mutation(() => Cast)
  createCast(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('createCastInput') createCastInput: CreateCastInput,
  ) {
    return this.castService.create(createCastInput, userId);
  }

  @Query(() => [Cast], { name: 'casts' })
  findAll(@GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string) {
    return this.castService.findAll(userId);
  }

  @Mutation(() => Cast)
  updateCast(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('updateCastInput') updateCastInput: UpdateCastInput,
  ) {
    return this.castService.update(updateCastInput, userId);
  }

  @Mutation(() => Cast)
  removeCast(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('removeCastInput') removeCastInput: RemoveCastInput,
  ) {
    return this.castService.remove(removeCastInput, userId);
  }
}
