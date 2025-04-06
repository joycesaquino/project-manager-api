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
import { CreateTaskDto } from './dtos/create-task.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(
    @Inject('PROJECTS_MANAGER_API') private readonly redisClient: ClientProxy,
  ) {}

  @Get()
  findAll(@Req() request) {
    try {
      const loggedUser = request.user;
      console.log('Enviando requisição para Tasks - Joyce Aquino', { cmd: 'get_tasks' });

      return this.redisClient.send(
        { cmd: 'get_tasks' },
        { userId: loggedUser.sub },
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get(':id')
  findById(@Req() request, @Param('id') taskId: number) {
    console.log('Enviando requisição para Tasks - Joyce Aquino', { cmd: 'get_task_by_id' });
    try {
      const loggedUser = request.user;
      return this.redisClient.send(
        { cmd: 'get_task_by_id' },
        { userId: loggedUser.sub, taskId },
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    console.log('Enviando requisição para Tasks - Joyce Aquino', { cmd: 'create_task' });
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
