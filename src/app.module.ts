import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseModelsModule } from './schemas/mongoose-models.module';
import { ObjectService } from './Objects/object.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './TypeOrm/pet.entity';
import { PetsController } from './TypeOrm/pets.controller';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://localhost:27017/conn2mongo`), 
    MongooseModelsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017',
      database: 'conn2mongo',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}', Pet
      ],
    }),
    TypeOrmModule.forFeature([Pet]),
  ],
  controllers: [AppController, PetsController],
  providers: [AppService, ObjectService],
})
export class AppModule {}
