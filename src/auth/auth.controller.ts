import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constants';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async signIn(
    @Body() signInDto: Record<string, any>,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log('aqui');

    const jwt = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );

    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'success',
    };
  }
}
