import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModelsModule } from './schemas/mongoose-models.module';
// import { DataModule } from './data/data.module';
import { DataService } from './data/data.service';
import { ProcessModule } from './process/process.module';
import { ProcessService } from './process/process.service';

const useCase = 'Dev';   // Dev, Test, Prod

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRoot(`mongodb://localhost:27017/nest_app`),

    MongooseModule.forRootAsync({               //factory provider
      imports: [ConfigModule],
      useFactory:( config: ConfigService) => {
        var uri;
        if(useCase == 'Dev')
          uri = config.get("DATABASE_DEV")
        else if(useCase == 'Test')
          uri = config.get("DATABASE_TEST")
        else
          uri = config.get("DATABASE_PROD")

        return { uri,};
      },
      inject: [ConfigService],
    }),
    
    MongooseModelsModule,
    
    ProcessModule,
    
    // DataModule,
  ],
  controllers: [AppController],
  providers: [AppService, DataService, ProcessService],
})
export class AppModule {}
