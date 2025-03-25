import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Req,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTaskDto } from '@project-manager-api/gateways/controllers/tasks/dtos/create-task.dto';
@Controller('tasks')
export class TasksController {
  constructor(
    @Inject('PROJECTS_MANAGER_API') private readonly redisClient:
    ClientProxy,
  ) {}
  @Get()
  async findAll(@Req() request) {
    try {
      const loggedUser = request.user;
      console.log('Disparando mensagem para Tasks');
      return this.redisClient.send(
        { cmd: 'get_tasks' },
        { userId: loggedUser.sub },
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Get(':id')
  async findOne(@Req() request, @Param('id') id: number) {
    try {
      const loggedUser = request.user;
      return this.redisClient.send(
        { cmd: 'get_task_by_id' },
        {
          userId: loggedUser.sub,
          taskId: id,
        },
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Post()
  async create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    try {
      const loggedUser = request.user;
      return this.redisClient.send(
        { cmd: 'create_task' },
        {
          userId: loggedUser.sub,
          task: createTaskDto,
        },
      );
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}