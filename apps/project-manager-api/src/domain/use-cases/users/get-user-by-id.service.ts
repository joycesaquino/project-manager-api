import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from '../../repositories/users.repository.service';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class GetUserByIdService {
  constructor(private readonly usersRepository: UsersRepositoryService) {}
  async execute(userId: number): Promise<IUser> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }
}
