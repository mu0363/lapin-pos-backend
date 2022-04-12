import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { PlanResolver } from './plan.resolver';
import { PlanService } from './plan.service';

@Module({
  providers: [PlanResolver, PlanService, PrismaService, UserService],
})
export class PlanModule {}
