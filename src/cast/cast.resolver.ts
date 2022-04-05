import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CastService } from './cast.service';
import { CreateCastInput } from './dto/create-cast.input';
import { UpdateCastInput } from './dto/update-cast.input';
import { Cast } from './models/cast.model';

@Resolver(() => Cast)
export class CastResolver {
  constructor(private readonly castService: CastService) {}

  @Mutation(() => Cast)
  createCast(@Args('createCastInput') createCastInput: CreateCastInput) {
    return this.castService.create(createCastInput);
  }

  @Query(() => [Cast], { name: 'casts' })
  findAll() {
    return this.castService.findAll();
  }

  @Query(() => Cast, { name: 'cast' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.castService.findOne(id);
  }

  @Mutation(() => Cast)
  updateCast(@Args('updateCastInput') updateCastInput: UpdateCastInput) {
    return this.castService.update(updateCastInput.id, updateCastInput);
  }

  @Mutation(() => Cast)
  removeCast(@Args('id', { type: () => Int }) id: number) {
    return this.castService.remove(id);
  }
}
