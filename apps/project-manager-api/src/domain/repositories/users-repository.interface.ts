import { DeepPartial } from 'typeorm';
import { IUser } from '../interfaces/user.interface';

export interface IUsersRepository {
  findById(id: number): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  add(payload: DeepPartial<IUser>): Promise<IUser>;
}
