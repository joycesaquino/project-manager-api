import { Module } from '@nestjs/common';

import { TaskEntity } from 'apps/tasks/src/infrastructure/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@project-manager-api/domain/entities/user.entity';
import { ProjectEntity } from '@project-manager-api/domain/entities/project.entity';
import { ProjectsRepositoryService } from '@project-manager-api/domain/repositories/projects.repository.service';
import { UsersRepositoryService } from '@project-manager-api/domain/repositories/users.repository.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, ProjectEntity, TaskEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [ProjectsRepositoryService, UsersRepositoryService],
  exports: [ProjectsRepositoryService, UsersRepositoryService],
})
export class DatabaseModule {}