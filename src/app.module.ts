import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { LocationsModule } from './locations/locations.module';
import { UbicationsModule } from './ubications/ubications.module';
import { FloorModule } from './floor/floor.module';
import { TypeUbicationModule } from './type-ubication/type-ubication.module';
import { InstructionsModule } from './instructions/instructions.module';
import { NavigationpointsModule } from './navigationpoints/navigationpoints.module';
import { DetailNavigationPointsubicationsModule } from './detail_navigation_pointsubications/detail_navigation_pointsubications.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.102',
      port: 1806,
      username: 'aguerrero',
      password: 'SxJ-Nr1prBU(Jc(v',
      database: 'follow-me',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClientModule,
    UserModule,
    RolesModule,
    LocationsModule,
    UbicationsModule,
    FloorModule,
    TypeUbicationModule,
    InstructionsModule,
    NavigationpointsModule,
    DetailNavigationPointsubicationsModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
