import { ITask } from '@tasks/domain/interfaces/task.interface';
import { IProject } from './project.interface';

export class IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  projects: IProject[];
  tasks: ITask[];
}
