import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUbicationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  idTypeUbication: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  location: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  idFloor: number;

  @IsString()
  imageUrl: string;
}

export class UpdateUbicationDto extends PartialType(CreateUbicationDto) {}