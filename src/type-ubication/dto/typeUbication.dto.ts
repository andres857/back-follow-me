import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTypeUbicationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateTypeUbicationDto extends PartialType(
  CreateTypeUbicationDto,
) {}
