import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/client.dto';
import { Public } from 'src/auth/constants';

@Public()
@Controller('clients')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  async getAllClients() {
    const clients = await this.clientService.findAll();
    return clients;
  }

  @Get('/:id')
  getClientById(@Param('id') id: string) {
    return `id client ${id}`;
  }

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }
}
