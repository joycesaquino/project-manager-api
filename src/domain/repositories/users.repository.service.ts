import { DataSource, DeepPartial, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { IUsersRepository } from './users-repository.interface';
import { IUser } from '../interfaces/user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepositoryService
  extends Repository<UserEntity>
  implements IUsersRepository
{
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  add(payload: DeepPartial<IUser>): Promise<IUser> {
    return this.save(payload);
  }

  findById(id: number): Promise<IUser> {
    return this.findOneByOrFail( {id} );
  }
}