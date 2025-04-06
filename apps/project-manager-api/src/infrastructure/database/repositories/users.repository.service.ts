import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { IUsersRepository } from '@project-manager-api/domain/repositories/users-repository.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

@Injectable()
export class UsersRepositoryService
  extends Repository<UserEntity>
  implements IUsersRepository
{
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  findByEmail(email: string): Promise<IUser> {
    return this.findOneByOrFail({ email });
  }

  findById(id: number): Promise<IUser> {
    return this.findOneByOrFail({ id });
  }

  add(paylod: DeepPartial<IUser>): Promise<IUser> {
    return this.save(paylod);
  }
}
