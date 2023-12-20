import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Clients } from './entity/client.entity';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  // imports: [TypeOrmModule.forFeature([Clients])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
