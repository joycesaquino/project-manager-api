import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsRepositoryService } from '../../domain/repositories/projects.repository.service';
import { TasksRepositoryService } from '../../domain/repositories/tasks.repository.service';
import { UsersRepositoryService } from '../../domain/repositories/users.repository.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [
    ProjectsRepositoryService,
    TasksRepositoryService,
    UsersRepositoryService,
  ],
  exports: [
    ProjectsRepositoryService,
    TasksRepositoryService,
    UsersRepositoryService,
  ],
})
export class DatabaseModule {}
