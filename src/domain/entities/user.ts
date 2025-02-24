import { IUser } from '../interfaces/user.interface';
import { IProject } from '../interfaces/project.interface';
import { ITask } from '../interfaces/task.interface';

export class User implements IUser {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  projects: IProject[];
  tasks: ITask[];
}