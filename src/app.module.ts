import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { healthCheckController } from './healthCheck.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [healthCheckController],
  providers: [PrismaService],
})
export class AppModule {}
