import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { CreateLocationDto } from 'src/locations/dto/location.dto';
import { CreateTypeUbicationDto } from 'src/type-ubication/dto/typeUbication.dto';
import { CreateFloorDto } from 'src/floor/dto/floor.dto';

export class CreateUbicationDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ValidateNested()
  @Type(() => CreateLocationDto)
  readonly location: CreateLocationDto;

  @ValidateNested()
  @Type(() => CreateTypeUbicationDto)
  readonly type: CreateTypeUbicationDto;

  @ValidateNested()
  @Type(() => CreateFloorDto)
  readonly floor: CreateFloorDto;
}

export class UpdateUbicationDto extends PartialType(CreateUbicationDto) {}
