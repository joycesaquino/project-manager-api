import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@project-manager-api/infrastructure/auth/auth.service';
import { LoginDto } from './dtos/login.dto';
import { Public } from '@project-manager-api/gateways/guards/auth-guard.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
