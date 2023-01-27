import { Module, Global } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OBJ_MODEL, ObjSchema } from "./obj.schema";
import { UserSchema, USER_MODEL } from "./user.schema";

const MODELS = [
  { name: OBJ_MODEL, schema: ObjSchema },
  { name: USER_MODEL, schema: UserSchema },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}