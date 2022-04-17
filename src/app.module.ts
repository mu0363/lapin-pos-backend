import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { graphqlUploadExpress } from 'graphql-upload';
import { CastModule } from './cast/cast.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { healthCheckController } from './healthCheck.controller';
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';
import { PlanModule } from './plan/plan.module';
import { PrismaService } from './prisma.service';
import { SaleModule } from './sale/sale.module';
import { SessionModule } from './session/session.module';
import { UserModule } from './user/user.module';

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
    SaleModule,
  ],
  controllers: [healthCheckController],
  providers: [PrismaService],
})

// AppModuleのmiddlewareとしてgraphqlUploadExpressを追加することにより
// multipart/form-dataのリクエストを処理できるようになる
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }))
      .forRoutes('graphql');
  }
}
