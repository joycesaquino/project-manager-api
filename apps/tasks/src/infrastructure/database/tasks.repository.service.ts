import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { ITask } from '@tasks/domain/interfaces/task.interface';
import { ITasksRepository } from '@tasks/domain/repositories/tasks-repository.interface';

@Injectable()
export class TasksRepositoryService
  extends Repository<TaskEntity>
  implements ITasksRepository
{
  constructor(dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  findAll(userId: number): Promise<ITask[]> {
    return this.findBy({ user: { id: userId } });
  }

  findById(id: number, userId: number): Promise<ITask> {
    return this.findOneByOrFail({ id, user: { id: userId } });
  }

  add(paylod: DeepPartial<ITask>): Promise<ITask> {
    return this.save(paylod);
  }

  updateById(payload: DeepPartial<ITask>) {
    return this.update(payload.id, payload);
  }
}
