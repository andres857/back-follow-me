import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { Public } from './constants';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async signIn(
    @Body() signInDto: Record<string, any>,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log(signInDto);
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
