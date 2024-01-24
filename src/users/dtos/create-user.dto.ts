import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsInt()
  @IsNotEmpty()
  client: number;

  @IsInt()
  @IsNotEmpty()
  rol: number;
}
