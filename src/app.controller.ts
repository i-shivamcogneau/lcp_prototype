import { Controller, Get, StreamableFile, Req, Res, Body, Response, Post, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { DataService } from './data/data.service';
import { JsonProducerService } from './json-producer';
import { ProcessService } from './process/process.service';
import { ObjDTO } from './schemas/obj.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly dataService: DataService,
    private readonly processService: ProcessService,
    private readonly jsonProducerService: JsonProducerService,
  ) {}

  @Post('addToQueue')
  getInvokeMsg(@Body() objDTO: ObjDTO){
    return this.jsonProducerService.sendJsonObj(objDTO);
  }

  @Get('js')
  getJS(@Req() req, @Response({ passthrough: true }) res ): StreamableFile {
    return this.appService.getJS(req, res);
  }

  @Get('data')
  async getAllObj() {
    return await this.dataService.getAllObj()
  }

  @Get("data:id")
  findOne(@Param("id") id: string) {
    return this.dataService.getOneObj(id);
  }

  @Post('data')
  async postJS(@Body() objDTO: ObjDTO, @Response({ passthrough: true }) res ) {
    var apires = "";
    for(var i in objDTO.APIS){
      const arr = objDTO.APIS[i].split(" ");

      if(arr.length != 2){
        return 'bad API';
      }

      var idx = Number(arr[1]) -1;

      switch(arr[0].toUpperCase()) {
        case "ADD":
          apires = apires + await this.dataService.postObj(objDTO.OBJECTS[idx]);
          break;
        case "UPDATE":
          apires = apires + await this.dataService.putObj(objDTO.OBJECTS[idx]);
          break;
        case "DELETE":
          apires = apires + await this.dataService.deleteObj(objDTO.OBJECTS[idx]);
          break;

        default:
          return 'bad API';
      }
    }
    return 'I hope it went well XD\n ' + apires;
  }

  @Post('process')
  async postFile(@Body() objDTO: ObjDTO, @Response({ passthrough: true }) res ) {
    var apires = "";
    
    for(var i in objDTO.PROCESSES){
      const arr = objDTO.PROCESSES[i].split(" ");

      if(arr.length != 3){
        return 'bad API';
      }

      switch(arr[0].toUpperCase()) {
        case "ADDITION":
          apires = apires + await this.processService.addJS(arr[1], arr[2]);
          break;
        case "SUBTRACTION":
          apires = apires + await this.processService.subJS(arr[1], arr[2]);
          break;
        case "MULTIPLICATION":
          apires = apires + await this.processService.mulJS(arr[1], arr[2]);
          break;
        case "DIVISION":
          apires = apires + await this.processService.divJS(arr[1], arr[2]);
          break;

        default:
          return 'bad API';
      }
    }

    return 'I hope it went well XD\n ' + apires;
  }
}