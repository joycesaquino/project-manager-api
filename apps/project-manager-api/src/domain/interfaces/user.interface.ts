import { IProject } from './project.interface';
import { ITask } from '../../../../tasks/src/domain/interfaces/task.interface';

/**
 * Interface representing a user within the system.
 *
 * This interface outlines the structure of a user entity,
 * containing their personal information and associated data.
 *
 * Properties:
 * - id: Unique identifier for the user.
 * - firstName: First name of the user.
 * - lastName: Last name of the user.
 * - email: Email address of the user.
 * - password: Encrypted password of the user.
 * - projects: Array of projects associated with the user.
 * - tasks: Array of tasks assigned to the user.
 *
 * This interface is primarily utilized to model user-related data within the application,
 * facilitating communication between different modules and the database.
 */
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  projects: IProject[];
  tasks: ITask[];
}
