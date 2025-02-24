import { ITask } from './task.interface';
import { IUser } from './user.interface';

/**
 * Represents a project with its associated properties and relationships.
 *
 * @interface IProject
 * @property {number} id - The unique identifier of the project.
 * @property {string} name - The name of the project.
 * @property {string} description - A detailed description of the project.
 * @property {ITask[]} tasks - A collection of tasks associated with the project.
 * @property {IUser} user - The user associated with or responsible for the project.
 */
export interface IProject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  user: IUser;
}