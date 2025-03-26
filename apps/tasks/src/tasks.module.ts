import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infraestructure.module';
import { GatewaysModule } from './gateways/gateways.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [DomainModule, InfrastructureModule, GatewaysModule],
})
export class TasksModule {}
