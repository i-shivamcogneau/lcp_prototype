import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { OBJ_MODEL, ObjDocument } from '../schemas/obj.schema';
import { Model } from "mongoose";
import { DataService } from 'src/data/data.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProcessService {
    constructor(
        @InjectModel(OBJ_MODEL) private readonly objModel: Model<ObjDocument>,
        private readonly dataService: DataService,
    ) {}

    async addJS( id1, id2){
        try {          
          var logger = fs.createWriteStream('./dist/test.js', {
            flags: 'a' // 'a' means appending (old data will be preserved)
          })
          
          const obj1 = await this.objModel.findById(id1);
          const obj2 = await this.objModel.findById(id2);
          
          console.log(obj1.object["a"])
          logger.write(`\nvar a1 = ${obj1.object["a"]}, a2 = ${obj2.object["a"]}\n`) // append string to your file
          logger.write(`var b1 = ${obj1.object["b"]}, b2 = ${obj2.object["b"]}\n`) // again
          logger.write('console.log(a1+a2)\n')
          logger.write('console.log(b1+b2)\n')
          logger.end()
          
          return 'created file ... maybe';
        }catch (error) {
          return error+ " " // new ServiceUnavailableException();
        }
    }

    async subJS( id1, id2){
        try {          
          var logger = fs.createWriteStream('./dist/test.js', {
            flags: 'a' // 'a' means appending (old data will be preserved)
          })
          
          const obj1 = await this.objModel.findById(id1);
          const obj2 = await this.objModel.findById(id2);
          
          console.log(obj1.object["a"])
          logger.write(`\nvar a1 = ${obj1.object["a"]}, a2 = ${obj2.object["a"]}\n`) // append string to your file
          logger.write(`var b1 = ${obj1.object["b"]}, b2 = ${obj2.object["b"]}\n`) // again
          logger.write('console.log(a1-a2)\n')
          logger.write('console.log(b1-b2)\n')
          logger.end()
          
          return 'created file ... maybe';
        }catch (error) {
          return error+ " " // new ServiceUnavailableException();
        }
    }

    async mulJS( id1, id2){
        try {          
          var logger = fs.createWriteStream('./dist/test.js', {
            flags: 'a' // 'a' means appending (old data will be preserved)
          })
          
          const obj1 = await this.objModel.findById(id1);
          const obj2 = await this.objModel.findById(id2);
          
          console.log(obj1.object["a"])
          logger.write(`\nvar a1 = ${obj1.object["a"]}, a2 = ${obj2.object["a"]}\n`) // append string to your file
          logger.write(`var b1 = ${obj1.object["b"]}, b2 = ${obj2.object["b"]}\n`) // again
          logger.write('console.log(a1*a2)\n')
          logger.write('console.log(b1*b2)\n')
          logger.end()
          
          return 'created file ... maybe';
        }catch (error) {
          return error+ " " // new ServiceUnavailableException();
        }
    }

    async divJS( id1, id2){
        try {          
          var logger = fs.createWriteStream('./dist/test.js', {
            flags: 'a' // 'a' means appending (old data will be preserved)
          })
          
          const obj1 = await this.objModel.findById(id1);
          const obj2 = await this.objModel.findById(id2);
          
          logger.write(`\nvar a1 = ${obj1.object["a"]}, a2 = ${obj2.object["a"]}\n`) // append string to your file
          logger.write(`var b1 = ${obj1.object["b"]}, b2 = ${obj2.object["b"]}\n`) // again
          logger.write('console.log(a1/a2)\n')
          logger.write('console.log(b1/b2)\n')
          logger.end()
          
          return 'created file ... maybe';
        }catch (error) {
          return error+ " " // new ServiceUnavailableException();
        }
    }
}
