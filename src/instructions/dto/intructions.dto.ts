import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateInstructionDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  Direction: string;

  @IsNumber()
  @IsNotEmpty()
  ubication: number;
}

export class UpdateInstructionsDto extends PartialType(CreateInstructionDto) {}
