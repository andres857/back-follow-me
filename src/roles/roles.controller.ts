import { Controller } from '@nestjs/common';
import { Public } from 'src/auth/constants';

@Public()
@Controller('roles')
export class RolesController {}
