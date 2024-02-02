import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    if (!email) {
      throw new UnauthorizedException('Email is required');
    }

    if (!pass) {
      throw new UnauthorizedException('Password is required');
    }

    const user = await this.usersService.findEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(pass, user.password); // 1 parametro pass textPlane, cryp ppassword

    if (!isMatch) {
      throw new UnauthorizedException();
    }
    // para generar un token
    const payload = {
      sub: user.id,
      username: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
