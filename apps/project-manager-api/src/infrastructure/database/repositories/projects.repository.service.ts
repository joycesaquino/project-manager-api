import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { ProjectEntity } from '../entities/project.entity';
import { IProjectsRepository } from '@project-manager-api/domain/repositories/projects-repository.interface';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';

@Injectable()
export class ProjectsRepositoryService
  extends Repository<ProjectEntity>
  implements IProjectsRepository
{
  constructor(dataSource: DataSource) {
    super(ProjectEntity, dataSource.createEntityManager());
  }

  findAll(userId: number): Promise<IProject[]> {
    return this.findBy({ user: { id: userId } });
  }

  findById(id: number, userId: number): Promise<IProject> {
    return this.findOneByOrFail({ id, user: { id: userId } });
  }

  add(payload: DeepPartial<IProject>): Promise<IProject> {
    return this.save(payload);
  }
}
