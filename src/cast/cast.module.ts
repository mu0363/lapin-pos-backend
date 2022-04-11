import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { CastResolver } from './cast.resolver';
import { CastService } from './cast.service';

@Module({
  providers: [CastResolver, CastService, PrismaService, UserService],
})
export class CastModule {}
