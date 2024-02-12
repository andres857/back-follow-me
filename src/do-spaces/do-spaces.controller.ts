import { Controller } from '@nestjs/common';
import { Public } from 'src/auth/constants';

@Public()
@Controller('do-spaces')
export class DoSpacesController {}
