import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { OBJ_MODEL, ObjDocument } from '../schemas/obj.schema';
import { Model } from "mongoose";

@Injectable()
export class DataService {
    constructor(
      @InjectModel(OBJ_MODEL) private readonly objModel: Model<ObjDocument>
    ) {}

    async getAllObj() {
      const objs = await this.objModel.find();

      return objs;
    }
    
    async getOneObj(id: string) {
      const obj = await this.objModel.findById(id);      
  
      if (!obj) {
        return new NotFoundException("object not found");
      }
  
      return obj;
    }

    async postObj( obj){
      try {
        const createdObj = await this.objModel.create(obj);
        return createdObj;
      }catch (error) {
        if (error.name === "ValidationError") {
          return new BadRequestException(error.errors);
        }

        return error+ " " // new ServiceUnavailableException();
      }
    }

    async putObj(obj) {
      const updatedJob = await this.objModel.findByIdAndUpdate(obj._id, obj, {
        new: true,
      });

      if (!updatedJob) {
        return new NotFoundException("object not found");
      }

      return updatedJob;
    }

    async deleteObj(obj) {
      const deletedUser = await this.objModel.findByIdAndDelete(obj._id);

      if (!deletedUser) {
        return new NotFoundException("object not found");
      }

      return deletedUser;
    }
}
