import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from '../../repositories/users.repository.service';
import { TasksRepositoryService } from '../../repositories/tasks.repository.service';
import { UpdateTaskDto } from '../../../gateways/controllers/tasks/dtos/update-task.dto';
import { ITask } from '../../interfaces/task.interface';

Injectable();
export class UpdateTaskService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
  ) {}
  async execute(payload: {
    task: UpdateTaskDto;
    userId: number;
  }): Promise<ITask> {
    const userData = await this.usersRepository.findById(payload.userId);
    if (!userData) {
      throw new Error('Usuário não encontrado');
    }
    await this.tasksRepository.updateById(payload.task);
    const task = this.tasksRepository.findById(payload.task.id);
    if (!task) {
      throw new Error('Tarefa não encontrado');
    }
    return task;
  }
}
