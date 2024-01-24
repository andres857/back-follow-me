import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUbicationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  imageUrl: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  location: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  type: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  floor: number;
}

export class UpdateUbicationDto extends PartialType(CreateUbicationDto) {}
