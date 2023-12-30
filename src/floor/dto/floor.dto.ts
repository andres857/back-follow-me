import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateFloorDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateFloorDto extends PartialType(CreateFloorDto) {}
