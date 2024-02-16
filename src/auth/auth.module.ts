import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/user.module';
<<<<<<< HEAD
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
=======
// import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
<<<<<<< HEAD
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
=======
  imports: [UserModule],
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
