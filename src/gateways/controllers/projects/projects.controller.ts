import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post, Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateProjectService } from 'src/domain/use-cases/projects/create-project.service';
import { GetAllProjectsService } from 'src/domain/use-cases/projects/get-all-projects.service';
import { GetProjectByIdService } from 'src/domain/use-cases/projects/get-project-by-id.service';
import { CreateProjectDto } from './dtos/create-project.dto';

const userId = 1;
@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly getAllProjectsUseCase: GetAllProjectsService,
    private readonly getProjectByIdUseCase: GetProjectByIdService,
    private readonly createProjectUseCase: CreateProjectService,
  ) {}

  @Get()
  async findAll(@Req() request) {
    try {
      const loggedUser = request.user;
      return await this.getAllProjectsUseCase.execute(loggedUser.sub);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  async findOne(@Req() request, @Param('id') id: number) {
    try {
      const loggedUser = request.user;

      return await this.getProjectByIdUseCase.execute({
        userId: loggedUser.sub,
        projectId: id,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  async create(@Req() request, @Body() createProjectDto: CreateProjectDto) {
    try {

      const loggedUser = request.user;
      return await this.createProjectUseCase.execute({
        userId: loggedUser.sub,
        project: createProjectDto,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}