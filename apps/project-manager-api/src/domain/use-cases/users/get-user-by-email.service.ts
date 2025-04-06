import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { BaseUseCase } from '../../../../../../libs/common/src/interfaces/base-use-case';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

@Injectable()
export class GetUserByEmailService implements BaseUseCase {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  execute(email: string): Promise<IUser> {
    return this.usersRepository.findByEmail(email);
  }
}
