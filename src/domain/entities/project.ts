import { IProject } from '../interfaces/project.interface';
import { ITask } from '../interfaces/task.interface';
import { IUser } from '../interfaces/user.interface';

export class Project implements IProject {
  description: string;
  id: number;
  name: string;
  tasks: ITask[];
  user: IUser;
}