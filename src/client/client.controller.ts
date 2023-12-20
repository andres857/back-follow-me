import { Controller, Get, Param } from '@nestjs/common';

@Controller('clients')
export class ClientController {
  @Get()
  getAllClients() {
    return 'allClients';
  }
  @Get('/:id')
  getClientById(@Param('id') id: string) {
    return `id client ${id}`;
  }
}
