import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { SessionResolver } from './session.resolver';
import { SessionService } from './session.service';

@Module({
  providers: [SessionResolver, SessionService, PrismaService, UserService],
})
export class SessionModule {}
