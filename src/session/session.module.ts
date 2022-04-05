import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SessionResolver } from './session.resolver';
import { SessionService } from './session.service';

@Module({
  providers: [SessionResolver, SessionService, PrismaService],
})
export class SessionModule {}
