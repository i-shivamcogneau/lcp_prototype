import { Module, Global } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OBJ_MODEL, ObjSchema } from "./obj.schema";

const MODELS = [
  { name: OBJ_MODEL, schema: ObjSchema },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}