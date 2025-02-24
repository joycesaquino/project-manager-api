import { ITask } from '../interfaces/task.interface';
import { IProject } from '../interfaces/project.interface';
import { IUser } from '../interfaces/user.interface';

export class Task implements ITask  {
  id: number;
  name: string;
  project: IProject;
  status: "pending" | "completed";
  user: IUser;

}