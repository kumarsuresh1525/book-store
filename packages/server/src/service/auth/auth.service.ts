import { Injectable } from '@nestjs/common';
import { AuthRepository } from 'src/repository/auth/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
}
