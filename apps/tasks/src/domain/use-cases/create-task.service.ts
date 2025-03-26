import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { TasksRepositoryService } from '../repositories/tasks.repository.service';
import { CreateTaskDto } from '../../gateways/controllers/dtos/create-task.dto';
import { ITask } from '../interfaces/task.interface';

@Injectable()
export class CreateTaskService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
  ) {}
  async execute(payload: {
    task: CreateTaskDto;
    userId: number;
  }): Promise<ITask> {

    const createdTask = await this.tasksRepository.add({
      name: payload.task.name,
      status: payload.task.status,
      project: { id: payload.task.projectId },
      user: { id: payload.task.userId },
    });
    if (!createdTask) {
      throw new Error('Erro ao criar tarefa');
    }
    return createdTask;
  }
}