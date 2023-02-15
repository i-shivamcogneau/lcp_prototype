export var MODELS = [];

import { PutAway_Item_MODEL, PutAway_ItemSchema } from "../Objects/putaway_item.schema";
import { PutAway_MODEL, PutAwaySchema } from "src/Objects/putaway.schema";

MODELS.push({ name: PutAway_Item_MODEL, schema: PutAway_ItemSchema })
MODELS.push({ name: PutAway_MODEL, schema: PutAwaySchema})
