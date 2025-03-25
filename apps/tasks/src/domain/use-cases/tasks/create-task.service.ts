import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '@project-manager-api/domain/use-cases/base-use-case';
import { UsersRepositoryService } from '@project-manager-api/domain/repositories/users.repository.service';
import { TasksRepositoryService } from '../../repositories/tasks.repository.service';
import { ProjectsRepositoryService } from '@project-manager-api/domain/repositories/projects.repository.service';
import { CreateTaskDto } from '../../../gateways/controllers/dtos/create-task.dto';
import { ITask } from '../../interfaces/task.interface';

@Injectable()
export class CreateTaskService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly tasksRepository: TasksRepositoryService,
    private readonly projcetsRepository: ProjectsRepositoryService,
  ) {}
  async execute(payload: {
    task: CreateTaskDto;
    userId: number;
  }): Promise<ITask> {
    const userData = await this.usersRepository.findById(payload.userId);
    if (!userData) {
      throw new Error('Usuário não encontrado');
    }
    const projectData = await this.projcetsRepository.findById(
      payload.task.projectId,
    );
    if (!projectData) {
      throw new Error('Projeto não encontrado');
    }
    const createdTask = await this.tasksRepository.add({
      name: payload.task.name,
      status: payload.task.status,
      project: projectData,
      user: { id: userData.id },
    });
    if (!createdTask) {
      throw new Error('Erro ao criar tarefa');
    }
    return createdTask;
  }
}