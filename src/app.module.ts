import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { CustomerModule } from './customer/customer.module';
import { healthCheckController } from './healthCheck.controller';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';
import { SessionModule } from './session/session.module';
import { CastModule } from './cast/cast.module';
import { PlanModule } from './plan/plan.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // schemaファイルのパスを指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // ディフォルトのplaygroundではなくApolloSandboxを使用する
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // "graphql-ws"が新しく推奨されているが、apollo sandboxが未対応のため
      // 旧来の"subscriptions-transport-ws"も有効にする
      subscriptions: { 'graphql-ws': true, 'subscriptions-transport-ws': true },
    }),
    UserModule,
    CustomerModule,
    ItemModule,
    SessionModule,
    CastModule,
    PlanModule,
    OrderModule,
    CategoryModule,
  ],
  controllers: [healthCheckController],
  providers: [PrismaService],
})
export class AppModule {}
