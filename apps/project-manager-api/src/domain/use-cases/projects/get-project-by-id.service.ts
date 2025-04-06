import { Injectable } from '@nestjs/common';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ProjectsRepositoryService } from '@project-manager-api/infrastructure/database/repositories/projects.repository.service';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { BaseUseCase } from '../../../../../../libs/common/src/interfaces/base-use-case';

@Injectable()
export class GetProjectByIdService implements BaseUseCase {
  constructor(
    private readonly projectsRepository: ProjectsRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
  ) {}

  async execute(payload: {
    projectId: number;
    userId: number;
  }): Promise<IProject> {
    await this.usersRepository.findById(payload.userId);

    const project = await this.projectsRepository.findById(
      payload.projectId,
      payload.userId,
    );

    return project;
  }
}
