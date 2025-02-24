import { ITask } from './task.interface';
import { IUser } from './user.interface';

/**
 * Represents a project in the system.
 *
 * This interface defines the structure of a project object,
 * encompassing its basic properties such as ID, name, and description,
 * as well as its associated tasks and user.
 *
 * Properties:
 * - id: A unique identifier for the project.
 * - name: The name of the project.
 * - description: A detailed explanation of the project's purpose or scope.
 * - tasks: A list of tasks associated with the project.
 * - user: The user or owner associated with the project.
 */
export interface IProject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  user: IUser;
}