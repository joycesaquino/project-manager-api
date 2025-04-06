import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Primeiro nome não pode ser vazio' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'Segundo nome não pode ser vazio' })
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'Senha não pode ser vazia' })
  @IsString()
  password: string;
}
