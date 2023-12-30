import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateHistoryDto {
  @IsString()
  @IsNotEmpty()
  readonly token_user: string;

  @IsNumber()
  @IsNotEmpty()
  readonly progress: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly completed: boolean;

  @IsOptional()
  @IsNumber()
  readonly time?: number;
}

export class UpdateHistoryDto extends PartialType(CreateHistoryDto) {}
