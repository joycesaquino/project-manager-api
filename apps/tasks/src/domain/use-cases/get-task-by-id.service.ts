import { BaseUseCase } from '@app/common/interfaces/base-use-case';
import { Injectable } from '@nestjs/common';
import { TasksRepositoryService } from '@tasks/infrastructure/database/tasks.repository.service';
import { ITask } from '../interfaces/task.interface';

@Injectable()
export class GetTaskByIdService implements BaseUseCase {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(taskId: number, userId: number): Promise<ITask> {
    const task = await this.tasksRepository.findById(taskId, userId);

    return task;
  }
}
