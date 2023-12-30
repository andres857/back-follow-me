import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from 'src/client/dto/client.dto';
import { CreateRolDto } from 'src/roles/dto/roles.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsOptional()
  @IsString()
  readonly lastName?: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ValidateNested()
  @Type(() => CreateClientDto)
  readonly client: CreateClientDto;

  @ValidateNested()
  @Type(() => CreateRolDto)
  readonly rol: CreateRolDto;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
