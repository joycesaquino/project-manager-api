import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateProjectService } from '@project-manager-api/domain/use-cases/projects/create-project.service';
import { GetAllProjectsService } from '@project-manager-api/domain/use-cases/projects/get-all-projects.service';
import { GetProjectByIdService } from '@project-manager-api/domain/use-cases/projects/get-project-by-id.service';
import { CreateProjectDto } from './dtos/create-project.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';

@ApiBearerAuth()
@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly createProjectUseCase: CreateProjectService,
    private readonly getAllProjectsUseCase: GetAllProjectsService,
    private readonly getProjectByIdUseCase: GetProjectByIdService,
  ) {}

  @Get()
  findAll(@Req() request): Promise<IProject[]> {
    try {
      const loggedUser = request.user;

      return this.getAllProjectsUseCase.execute(loggedUser.sub);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  findById(@Req() request, @Param('id') id: number) {
    try {
      const loggedUser = request.user;

      return this.getProjectByIdUseCase.execute({
        projectId: id,
        userId: loggedUser.sub,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  create(@Req() request, @Body() createProjectDto: CreateProjectDto) {
    try {
      const loggedUser = request.user;

      return this.createProjectUseCase.execute({
        project: createProjectDto,
        userId: loggedUser.sub,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
