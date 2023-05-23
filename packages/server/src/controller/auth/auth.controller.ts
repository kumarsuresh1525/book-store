import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterUserDto } from 'src/dto/auth/register-user.dto';
import { AuthService } from 'src/service/auth/auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @HttpCode(204)
  register(@Body() registerUserDto: RegisterUserDto) {
    return;
  }
}
