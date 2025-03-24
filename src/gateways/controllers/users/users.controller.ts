import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserService } from 'src/domain/use-cases/users/create-user.service';
import { GetUserByIdService } from 'src/domain/use-cases/users/get-user-by-id.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Public } from '../../guards/auth-guard/auth-guard.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getUserUseCase: GetUserByIdService,
    private readonly createUserUseCase: CreateUserService,
  ) {}
  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.getUserUseCase.execute(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Post()
  @Public()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.createUserUseCase.execute({ ...createUserDto });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
