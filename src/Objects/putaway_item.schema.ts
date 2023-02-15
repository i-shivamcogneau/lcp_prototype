import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class PutAway_Item {
    @Prop({ default: new Date().valueOf(), type: Number })
    putaway_detail_id: number;

    @Prop({ default: "1", required: true, type: String })
    item_no: string;

    @Prop({ default: 1, type: Number })
    item_id: number;

    @Prop({ default: "something", type: String })
    description: string;

    @Prop({ default: "", type: String })
    bin_code: string;

    @Prop({ default: 0, type: Number })
    quantity: number;

    @Prop({ default: "", type: String })
    qc_status: string;

    @Prop({ default: "", type: String })
    box_no: string;

    @Prop({ default: "", type: String })
    lot_no: string;

    @Prop({ default: "", type: String })
    season_code: string;

    @Prop({ default: "", type: String })
    brand_code: string;

    @Prop({ default: "", type: String })
    pet_style_code: string;

    @Prop({ default: "", type: String })
    color_code: string;

    @Prop({ default: "", type: String })
    size_code: string;

    @Prop({ default: "", type: String })
    category_code: string;

    @Prop({ default: 0, type: Number })
    uom_id: number;

    @Prop({ default: "", type: String })
    code: string;
}

export const PutAway_Item_MODEL = PutAway_Item.name; // User
export type PutAway_ItemDocument = PutAway_Item & Document;

export const PutAway_ItemSchema = SchemaFactory.createForClass(PutAway_Item);