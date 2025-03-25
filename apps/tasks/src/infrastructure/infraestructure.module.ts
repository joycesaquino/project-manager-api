import { TaskEntity } from './entities/task.entity';
import { ProjectEntity } from '@project-manager-api/domain/entities/project.entity';
import { UserEntity } from '@project-manager-api/domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TasksRepositoryService } from '../domain/repositories/tasks.repository.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity, ProjectEntity, UserEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [TasksRepositoryService],
  exports: [TasksRepositoryService],
})
export class InfrastructureModule {}
