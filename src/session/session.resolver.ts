import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { CreateSessionInput } from './dto/create-session.input';
import { UpdateSessionInput } from './dto/update-session.input';
import { Session } from './models/session.model';
import { SessionService } from './session.service';

@Resolver(() => Session)
// @UseGuards(AuthenticateGuard)
export class SessionResolver {
  constructor(private readonly sessionService: SessionService) {}

  @Mutation(() => Session)
  createSession(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('createSessionInput') createSessionInput: CreateSessionInput,
  ) {
    return this.sessionService.create(createSessionInput, userId);
  }

  @Query(() => [Session], { name: 'sessions' })
  findAll() {
    const userId = '6523fe42-8eb3-4267-84ea-68eb1d59d0c5';
    return this.sessionService.findAll(userId);
  }

  // @Query(() => [Session], { name: 'sessions' })
  // findAll(@GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string) {
  //   return this.sessionService.findAll(userId);
  // }

  @Query(() => Session, { name: 'session' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sessionService.findOne(id);
  }

  @Mutation(() => Session)
  updateSession(
    @Args('updateSessionInput') updateSessionInput: UpdateSessionInput,
  ) {
    return this.sessionService.update(
      updateSessionInput.id,
      updateSessionInput,
    );
  }

  @Mutation(() => Session)
  removeSession(@Args('id', { type: () => Int }) id: number) {
    return this.sessionService.remove(id);
  }
}
