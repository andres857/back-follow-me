import { CreateUserDto } from './create-user.dto';
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class EditUserDto extends PartialType(
    OmitType(CreateUserDto, ['password'] as const),
) {}