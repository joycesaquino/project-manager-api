import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { GetUserByIdService } from './get-user-by-id.service';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { GetUserByEmailService } from './get-user-by-email.service';

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserService, GetUserByIdService, GetUserByEmailService],
  exports: [CreateUserService, GetUserByIdService, GetUserByEmailService],
})
export class UsersModule {}
