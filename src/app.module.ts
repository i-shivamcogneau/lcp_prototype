import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseModelsModule } from './schemas/mongoose-models.module';
import { ObjectService } from './Objects/object.service';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://localhost:27017/conn2mongo`), 
    MongooseModelsModule
  ],
  controllers: [AppController],
  providers: [AppService, ObjectService],
})
export class AppModule {}
