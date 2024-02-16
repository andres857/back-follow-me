import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, EditUserDto } from './dtos';
import { Response, Request } from 'express';
<<<<<<< HEAD

// import { Public } from 'src/auth/constants';
=======
import { Public } from 'src/auth/constants';
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34

@Public()
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getMany(@Req() request: Request) {
    const cookie = request.cookies['jwt'];
<<<<<<< HEAD
    // const data = await this.userService.getMany();
    // return {
    //   message: 'Petición correcta',
    //   data,
    // };
    return cookie;
=======
    const data = await this.userService.getMany();
    return {
      message: 'Petición correcta',
      cookie: cookie,
      data,
    };
>>>>>>> fd8cfb38f26c27becba7de463b40c4c930fccf34
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOne(id);
  }
  // @Public()
  @Post()
  createOne(@Body() dto: CreateUserDto) {
    return this.userService.createOne(dto);
  }

  @Put(':id')
  editOne(@Param('id', ParseIntPipe) id: number, @Body() dto: EditUserDto) {
    return this.userService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }
}
