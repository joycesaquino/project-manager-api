import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { TasksRepositoryService } from '../repositories/tasks.repository.service';
import { ITask } from '../interfaces/task.interface';

Injectable();
export class GetAllTasksService implements BaseUseCase {
  constructor(
    private readonly tasksRepository: TasksRepositoryService,
  ) {}
  async execute(payload: { userId: number }): Promise<ITask[]> {
    const tasks = await this.tasksRepository.findAll(payload.userId);
    if (!tasks) {
      throw new Error('Erro ao listar tarefas');
    }
    return tasks;
  }
}
