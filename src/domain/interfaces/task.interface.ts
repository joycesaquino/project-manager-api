import { IProject } from './project.interface';
import { IUser } from './user.interface';

/**
 * Represents a task within a project management system or similar application.
 * This interface defines the structure of a task, including its identification,
 * association with a project, assigned user, and its current state.
 *
 * Properties:
 * - `id`: A unique identifier for the task.
 * - `name`: The name or title of the task.
 * - `status`: The current completion status of the task, either 'pending' or 'completed'.
 * - `project`: The project to which the task belongs. Defined as an `IProject` object.
 * - `user`: The user assigned to this task. Defined as an `IUser` object.
 */
export interface ITask {
  id: number;
  name: string;
  status: 'pending' | 'completed';
  project: IProject;
  user: IUser;
}