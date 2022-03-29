import { Module } from '@nestjs/common';
import { healthCheckController } from './healthCheck.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [healthCheckController],
  providers: [PrismaService],
})
export class AppModule {}
