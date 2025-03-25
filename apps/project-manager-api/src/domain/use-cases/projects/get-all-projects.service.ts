import { Injectable } from '@nestjs/common';
import { BaseUseCase } from '../base-use-case';
import { UsersRepositoryService } from '../../repositories/users.repository.service';
import { ProjectsRepositoryService } from '../../repositories/projects.repository.service';
import { IProject } from '../../interfaces/project.interface';

Injectable();
export class GetAllProjectsService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly projectsRepository: ProjectsRepositoryService,
  ) {}
  async execute(userId: number): Promise<IProject[]> {
    const userData = await this.usersRepository.findById(userId);
    if (!userData) {
      throw new Error('Usuário não encontrado');
    }
    const projects = await this.projectsRepository.findAll(userId);
    if (!projects) {
      throw new Error('Erro ao recuperar projetos');
    }
    return projects;
  }
}
