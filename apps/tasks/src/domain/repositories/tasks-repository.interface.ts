import { DeepPartial } from 'typeorm';
import { ITask } from '../interfaces/task.interface';

export interface ITasksRepository {
  findAll(userId: number): Promise<ITask[]>;
  findById(id: number, userId: number): Promise<ITask>;
  add(paylod: DeepPartial<ITask>): Promise<ITask>;
  updateById(payload: DeepPartial<ITask>);
}
