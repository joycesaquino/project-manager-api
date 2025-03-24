import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { IProject } from 'src/domain/interfaces/project.interface';
import { IProjectsRepository } from 'src/domain/repositories/projects-repository.interface';
import { ProjectEntity } from '../entities/project.entity';

@Injectable()
export class ProjectsRepositoryService
  extends Repository<ProjectEntity>
  implements IProjectsRepository
{
  constructor(dataSource: DataSource) {
    super(ProjectEntity, dataSource.createEntityManager());
  }

  async findAll(userId: number): Promise<IProject[]> {
    return this.findBy({ user: { id: userId } });
  }

  async findById(id: number): Promise<IProject> {
    return this.findOneByOrFail({ id });
  }

  async add(payload: DeepPartial<IProject>): Promise<IProject> {
    return this.save(payload);
  }
}