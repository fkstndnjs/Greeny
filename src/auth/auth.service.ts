import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(id: number): {
    token: string;
  } {
    const token = this.jwtService.sign({ id });

    return { token };
  }
}
