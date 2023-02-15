import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PutAway_MODEL, PutAwayDocument } from './putaway.schema';

@Injectable()
export class ObjectService {
  constructor(
    @InjectModel(PutAway_MODEL) private readonly PutAwayModel: Model<PutAwayDocument>
  ) {}

  async PostObj(pai) {
    const createdObject = await this.PutAwayModel.create(pai);
    return createdObject;
  }

  async PutObj(pai) {
    const updatedJob = await this.PutAwayModel.findByIdAndUpdate(pai._id, pai, {
      new: true,
    });

    return updatedJob;
  }
}
