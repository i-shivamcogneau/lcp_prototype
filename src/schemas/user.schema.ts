import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  username: String;
  
  @Prop({ required: true, type: String })
  password: String;

}

export const USER_MODEL = User.name; // User
export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
