import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetCurrentUserId } from 'src/common/decorators/current-user-id.decorator';
import { CreateSessionInput } from './dto/create-session.input';
import { RemoveSessionInput } from './dto/remove-session.input';
import { UpdateSessionInput } from './dto/update-session.input';
import { Session } from './models/session.model';
import { SessionService } from './session.service';

@Resolver(() => Session)
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
  findAll(@GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string) {
    return this.sessionService.findAll(userId);
  }

  @Mutation(() => Session)
  updateSession(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('updateSessionInput') updateSessionInput: UpdateSessionInput,
  ) {
    return this.sessionService.update(updateSessionInput, userId);
  }

  @Mutation(() => Session)
  removeSession(
    @GetCurrentUserId('userId', new ParseUUIDPipe()) userId: string,
    @Args('removeSessionInput') removeSessionInput: RemoveSessionInput,
  ) {
    return this.sessionService.remove(removeSessionInput, userId);
  }
}
