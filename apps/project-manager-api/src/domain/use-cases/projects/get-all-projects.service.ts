import { Injectable } from '@nestjs/common';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ProjectsRepositoryService } from '@project-manager-api/infrastructure/database/repositories/projects.repository.service';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { BaseUseCase } from '../../../../../../libs/common/src/interfaces/base-use-case';

@Injectable()
export class GetAllProjectsService implements BaseUseCase {
  constructor(
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
  ) {}

  async execute(userId: number): Promise<IProject[]> {
    const userData = await this.usersRepository.findById(userId);

    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    const projects = await this.projectsRepository.findAll(userId);

    if (!projects) {
      throw new Error('Erro ao listar projetos');
    }

    return projects;
  }
}
