import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../../../../../../libs/common/src/interfaces/base-use-case';
import { CreateProjectDto } from '@project-manager-api/gateways/controllers/projects/dtos/create-project.dto';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ProjectsRepositoryService } from '@project-manager-api/infrastructure/database/repositories/projects.repository.service';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';

@Injectable()
export class CreateProjectService implements BaseUseCase {
  constructor(
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
  ) {}

  async execute(payload: {
    project: CreateProjectDto;
    userId: number;
  }): Promise<IProject> {
    const userData = await this.usersRepository.findById(payload.userId);

    if (!userData) {
      throw new Error('Usuário não encontrado');
    }

    const createdProject = await this.projectsRepository.add({
      name: payload.project.name,
      description: payload.project.description,
      user: { id: userData.id },
    });

    if (!createdProject) {
      throw new Error('Erro ao criar projeto');
    }

    return createdProject;
  }
}
