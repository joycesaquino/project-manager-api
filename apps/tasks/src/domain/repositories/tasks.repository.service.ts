import { DataSource, DeepPartial, Repository } from 'typeorm';
import { TaskEntity } from '../../infrastructure/entities/task.entity';
import { ITasksRepository } from './tasks-repository.interface';
import { ITask } from '../interfaces/task.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepositoryService
  extends Repository<TaskEntity>
  implements ITasksRepository {
  constructor(dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  add(payload: DeepPartial<ITask>): Promise<ITask> {
    return this.save(payload) as Promise<ITask>;
  }

  findAll(userId: number): Promise<ITask[]> {
    return this.findBy({ user: { id: userId } });
  }

  findById(id: number): Promise<ITask> {
    return this.findOneByOrFail({ id });
  }

  updateById(payload: DeepPartial<ITask>): Promise<ITask> {
    return this.save(payload) as Promise<ITask>;
  }
}