import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
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
    console.log(jwt);

    // response.cookie('jwt', jwt, { httpOnly: true });
    const cookie = response.cookie('jwt', jwt);
    console.log(cookie);

    return response.json({
      message: 'success',
    });
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
