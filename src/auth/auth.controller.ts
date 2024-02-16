<<<<<<< HEAD
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
=======
import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constants';
import { Response } from 'express';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
  @Post('login')
  async signIn(
    @Body() signInDto: Record<string, any>,
    @Res({ passthrough: true }) response: Response,
  ) {
<<<<<<< HEAD
=======
    console.log(signInDto);
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
    const jwt = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
<<<<<<< HEAD
    console.log(jwt);

    // response.cookie('jwt', jwt, { httpOnly: true });
=======
    response.cookie('jwt', jwt, { httpOnly: true });
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
    return {
      message: 'success',
    };
  }
<<<<<<< HEAD

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
=======
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
}
