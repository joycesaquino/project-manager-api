import { Module } from '@nestjs/common';
import { DomainModule } from '@tasks/domain/domain.module';
import { TasksController } from './controllers/tasks.controller';

@Module({
  imports: [DomainModule],
  controllers: [TasksController],
})
export class GatewaysModule {}
