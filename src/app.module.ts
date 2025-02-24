import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './gateways/controllers/controllers.module';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { GatewaysModule } from './gateways/gateways.module';
import { GetAllProjectsService } from './–flat/domain/use-cases/projects/get-all-projects/get-all-projects.service';

@Module({
  imports: [ControllersModule, DomainModule, InfrastructureModule, GatewaysModule],
  controllers: [AppController],
  providers: [AppService, GetAllProjectsService],
})
export class AppModule {}
