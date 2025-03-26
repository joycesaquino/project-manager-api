import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from '../../../../tasks/src/domain/use-cases/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProjectsModule, TasksModule, UsersModule],
  exports: [ProjectsModule, TasksModule, UsersModule],
})
export class UseCasesModule {}
