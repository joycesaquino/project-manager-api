import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { AppController } from './app.controller';
import { GatewaysModule } from './gateways/gateways.module';
import { AuthGuardService } from './gateways/guards/auth-guard/auth-guard.service';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [DomainModule, InfrastructureModule, GatewaysModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuardService,
    },
  ],
})
export class AppModule {}
