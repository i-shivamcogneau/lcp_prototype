import { Global, Module } from '@nestjs/common';
import { DataService } from './data.service';
import { ApiTags } from '@nestjs/swagger';
import { DataController } from './data.controller';


@ApiTags('Object Handling')
@Global()
@Module({
  providers: [DataService],
  controllers: [DataController],
  exports: [DataService]
})
export class DataModule {}
