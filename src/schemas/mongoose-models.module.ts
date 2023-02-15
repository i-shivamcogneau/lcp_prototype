import { Module, Global } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
// import { PutAway_Item_MODEL, PutAway_ItemSchema } from "../Objects/putaway_item.schema";
// import { PutAway_MODEL, PutAwaySchema } from "src/Objects/putaway.schema";
import { MODELS } from "./Models";
// const MODELS = [
//   { name: PutAway_Item_MODEL, schema: PutAway_ItemSchema },
//   { name: PutAway_MODEL, schema: PutAwaySchema}
// ];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}