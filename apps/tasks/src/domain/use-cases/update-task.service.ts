import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from '@tasks/gateways/controllers/dtos/update-task.dto';
import { TasksRepositoryService } from '@tasks/infrastructure/database/tasks.repository.service';
import { ITask } from '../interfaces/task.interface';

@Injectable()
export class UpdateTaskService {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(task: UpdateTaskDto, userId: number): Promise<ITask> {
    await this.tasksRepository.updateById(task);
    const taskData = await this.tasksRepository.findById(task.id, userId);

    return taskData;
  }
}
