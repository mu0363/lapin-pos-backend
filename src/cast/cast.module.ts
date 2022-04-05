import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CastResolver } from './cast.resolver';
import { CastService } from './cast.service';

@Module({
  providers: [CastResolver, CastService, PrismaService],
})
export class CastModule {}
