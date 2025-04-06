import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
import { BaseUseCase } from '../../../../../../libs/common/src/interfaces/base-use-case';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';

@Injectable()
export class GetUserByIdService implements BaseUseCase {
  constructor(private readonly usersRepository: UsersRepositoryService) {}

  async execute(userId: number): Promise<IUser> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }
}
