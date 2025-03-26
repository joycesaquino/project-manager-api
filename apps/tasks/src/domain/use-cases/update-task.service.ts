import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { UsersRepositoryService } from '@project-manager-api/domain/repositories/users.repository.service';
import { TasksRepositoryService } from '../repositories/tasks.repository.service';
import { UpdateTaskDto } from '../../gateways/controllers/dtos/update-task.dto';
import { ITask } from '../interfaces/task.interface';

Injectable();
export class UpdateTaskService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
  ) {}
  async execute(payload: {
    task: UpdateTaskDto;
    userId: number;
  }): Promise<ITask> {
    await this.tasksRepository.updateById(payload.task);
    const task = this.tasksRepository.findById(payload.task.id);
    if (!task) {
      throw new Error('Tarefa não encontrado');
    }
    return task;
  }
}
