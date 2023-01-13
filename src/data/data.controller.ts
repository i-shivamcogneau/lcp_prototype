import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DataService } from './data.service';

@ApiTags('dataHandling')
@Controller('dataHandling')
export class DataController {
    constructor(
        private readonly dataService: DataService,
    ) {}

    @Get('data')
  async getAllObj() {
    return await this.dataService.getAllObj()
  }
}