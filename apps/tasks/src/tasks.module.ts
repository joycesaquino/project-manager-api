import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { DomainModule } from './domain/domain.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { GatewaysModule } from './gateways/gateways.module';

@Module({
  imports: [InfrastructureModule, GatewaysModule, DomainModule],
  providers: [TasksService],
})
export class TasksModule {}
