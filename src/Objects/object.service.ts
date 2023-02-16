import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PutAway_MODEL, PutAwayDocument } from './putaway.schema';

@Injectable()
export class ObjectService {
  constructor(
    @InjectModel(PutAway_MODEL) private readonly PutAwayModel: Model<PutAwayDocument>
  ) {}

  async PostObj(req) {
    const createdObject = await this.PutAwayModel.create(req);
    return createdObject;
  }

  async PutObj(req) {
    const updatedJob = await this.PutAwayModel.findOneAndUpdate(req.filter, req.updateData, {
      new: true,
    });

    return updatedJob;
  }
}
