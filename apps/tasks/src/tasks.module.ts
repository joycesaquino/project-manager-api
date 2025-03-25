import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infraestructure.module';
import { GatewaysModule } from './gateways/gateways.module';

@Module({
  imports: [InfrastructureModule, GatewaysModule],
})
export class TasksModule {}
