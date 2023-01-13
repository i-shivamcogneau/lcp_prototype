import { Injectable, StreamableFile, NotFoundException, ServiceUnavailableException,  BadRequestException} from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OBJ_MODEL, ObjDocument } from './schemas/obj.schema';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getJS( req, res): StreamableFile {
    res.set({
        'Content-Type': 'text/plain'
    });

    const file = path.join(__dirname, './test.js');
    const readStream = fs.createReadStream(file);
    readStream.on('data', (chunk) => console.log(chunk)); // <--- the data log gets printed
    readStream.on('end', () => console.log('done'));
    readStream.on('error', (err) => { console.error(err); });

    return new StreamableFile(readStream);
  }

  async postJS( obj, res){
    try {
      res.set({
          'Content-Type': 'text/plain'
      });
      
      var logger = fs.createWriteStream('./dist/test.js', {
        flags: 'a' // 'a' means appending (old data will be preserved)
      })
      
      logger.write(`\nvar a = ${obj.object.a}\n`) // append string to your file
      logger.write(`var b = ${obj.object.b}\n`) // again
      logger.write('console.log(a>b)\n')
      logger.end()
      
      return 'created file';
    }catch (error) {
      if (error.name === "ValidationError") {
        return new BadRequestException(error.errors);
      }

      return error+ " " // new ServiceUnavailableException();
    }
  }



}
