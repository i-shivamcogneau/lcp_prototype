import { Module } from '@nestjs/common';
import { DataService } from 'src/data/data.service';
import { ProcessService } from './process.service';

@Module({
  providers: [ProcessService, DataService]
})
export class ProcessModule {}
