import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { ITask } from '../interfaces/task.interface';
import { TasksRepositoryService } from '../repositories/tasks.repository.service';

@Injectable()
export class GetTaskByIdService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
  ) {}
  async execute(payload: { taskId: number; userId: number }): Promise<ITask> {
    const task = await this.tasksRepository.findById(payload.taskId);
    if (!task) {
      throw new Error('Erro ao listar tarefas');
    }
    return task;
  }
}
