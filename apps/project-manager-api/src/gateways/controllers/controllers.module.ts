import { Module } from '@nestjs/common';
import { ProjectsController } from './projects/projects.controller';
import { TasksController } from './tasks/tasks.controller';
import { UsersController } from './users/users.controller';
import { UseCasesModule } from '../../domain/use-cases/use-cases.module';
import { AuthController } from './auth/auth/auth.controller';
import { AuthModule } from '../../infrastructure/auth/auth.module';

@Module({
  imports: [UseCasesModule, AuthModule],
  controllers: [ProjectsController, TasksController, UsersController, AuthController],
})
export class ControllersModule {}