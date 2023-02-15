import { Controller, Get, Body, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ObjectService } from './Objects/object.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly objectService: ObjectService, ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('schema')
  PostObj(@Body() pai) {
    return this.objectService.PostObj(pai);
  }

  @Put('schema')
  PutObj(@Body() pai) {
    return this.objectService.PutObj(pai);
  }

  @Post('mclient')
  postOBJ(@Body() pai){
    return this.appService.postOBJ(pai);
  }
  @Put('mclient')
  putOBJ(@Body() pai){
    return this.appService.putOBJ(pai);
  }
}
