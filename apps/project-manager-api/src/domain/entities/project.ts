import { ITask } from '@tasks/domain/interfaces/task.interface';
import { IProject } from '../interfaces/project.interface';
import { IUser } from '../interfaces/user.interface';

export class Project implements IProject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  user: IUser;
}
