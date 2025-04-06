import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'Email do usuário' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ description: 'Senha com mais de 2 caracteres' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
