import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from '../../repositories/users.repository.service';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class GetUserByEmailService {
  constructor(private readonly usersRepository: UsersRepositoryService) {
  }

  async execute(email: string): Promise<IUser> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }
}
