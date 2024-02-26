import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateFloorDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateFloorDto extends PartialType(CreateFloorDto) {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
