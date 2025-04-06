import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserService } from '@project-manager-api/domain/use-cases/users/create-user.service';
import { GetUserByIdService } from '@project-manager-api/domain/use-cases/users/get-user-by-id.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Public } from '@project-manager-api/gateways/guards/auth-guard.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(
    private readonly getUserByIdUseCase: GetUserByIdService,
    private readonly createUserUseCase: CreateUserService,
  ) {}

  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return this.getUserByIdUseCase.execute(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post()
  @Public()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.createUserUseCase.execute(createUserDto);
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }
}
