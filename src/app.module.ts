import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { UserModule } from './users/user.module';
import { RolesModule } from './roles/roles.module';
import { LocationsModule } from './locations/locations.module';
import { UbicationsModule } from './ubications/ubications.module';
import { FloorModule } from './floor/floor.module';
import { TypeUbicationModule } from './type-ubication/type-ubication.module';
import { InstructionsModule } from './instructions/instructions.module';
import { HistoryModule } from './history/history.module';
import { PathwaysModule } from './pathways/pathways.module';
import { DetailPathwaysUbicationsModule } from './detail_pathways_ubications/detail_pathways_ubications.module';
import { DoSpacesModule } from './do-spaces/do-spaces.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_JWT, // Utiliza la clave secreta configurada
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ClientModule,
    UserModule,
    RolesModule,
    LocationsModule,
    UbicationsModule,
    FloorModule,
    TypeUbicationModule,
    InstructionsModule,
    HistoryModule,
    PathwaysModule,
    DetailPathwaysUbicationsModule,
    DoSpacesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
