import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEmpty,
  IsOptional,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { CreateUbicationDto } from 'src/ubications/dto/ubication.dto';

export class CreateDetailPathwaysUbicationsDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  readonly time?: number;

  @IsNumber()
  @IsPositive()
  readonly order: number;

  @ValidateNested()
  @Type(() => CreateUbicationDto)
  readonly ubication: CreateUbicationDto;
}

export class UpdateDetailPathwaysUbicationsDto extends PartialType(
  CreateDetailPathwaysUbicationsDto,
) {}
