import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";

@Schema()
export class Obj {
  @Prop({ required: true })
  _id: number;

  // @Prop({ required: true, type: Object })
  // api: object;
  
  @Prop({ required: true, type: Object })
  object: object;

  // @Prop({ required: true, type: Object })
  // process: object;

  // @Prop(
  //   // NOTE: object or any kind (mixed type) of data type
  //   raw({
  //     reference: { type: String },
  //     beta: { type: Boolean },
  //   })
  // )
  // metadata: Record<string, any> | any;
}

export const OBJ_MODEL = Obj.name; // User
export type ObjDocument = Obj & Document;

export const ObjSchema = SchemaFactory.createForClass(Obj);