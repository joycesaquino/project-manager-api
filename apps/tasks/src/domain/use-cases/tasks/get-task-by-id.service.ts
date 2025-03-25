import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { UsersRepositoryService } from '@project-manager-api/domain/repositories/users.repository.service';
import { TasksRepositoryService } from 'apps/tasks/src/domain/repositories/tasks.repository.service';
import { ITask } from 'apps/tasks/src/domain/interfaces/task.interface';

@Injectable()
export class GetTaskByIdService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
  ) {}
  async execute(payload: { taskId: number; userId: number }): Promise<ITask> {
    const userData = await this.usersRepository.findById(payload.userId);
    if (!userData) {
      throw new Error('Usuário não encontrado');
    }
    const task = await this.tasksRepository.findById(payload.taskId);
    if (!task) {
      throw new Error('Erro ao listar tarefas');
    }
    return task;
  }
}
