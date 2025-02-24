import { Module } from '@nestjs/common';
import { GetAllTasksByProjectIdService } from './get-all-tasks-by-project-id.service';
import { GetTaskByIdService } from './get-task-by-id.service';
import { CreateTaskService } from './create-task.service';
import { UpdateTaskService } from './update-task.service';

@Module({
  providers: [GetAllTasksByProjectIdService, GetTaskByIdService, CreateTaskService, UpdateTaskService]
})
export class TasksModule {}
