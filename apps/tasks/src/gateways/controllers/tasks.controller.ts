import {
  Controller,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTaskService } from '@tasks/domain/use-cases/create-task.service';
import { GetAllTasksService } from '@tasks/domain/use-cases/get-all-tasks.service';
import { GetTaskByIdService } from '@tasks/domain/use-cases/get-task-by-id.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly getAllTasksUseCase: GetAllTasksService,
    private readonly getTaskByIdUseCase: GetTaskByIdService,
    private readonly createTaskUseCase: CreateTaskService,
  ) {}

  @MessagePattern({ cmd: 'get_tasks' })
  findAll(@Payload() data: { userId: number }) {
    console.log('Processando requisição em Tasks');

    try {
      return this.getAllTasksUseCase.execute(data.userId);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'get_task_by_id' })
  findById(@Payload() data: { userId: number; taskId: number }) {
    console.log('Processando GET em Tasks - get_task_by_id');
    try {
      return this.getTaskByIdUseCase.execute(data.taskId, data.userId);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @MessagePattern({ cmd: 'create_task' })
  create(@Payload() data: { task: CreateTaskDto; userId: number }) {
    console.log('Processando POST em Tasks - create_task');
    try {
      return this.createTaskUseCase.execute({
        task: data.task,
        userId: data.userId,
      });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
