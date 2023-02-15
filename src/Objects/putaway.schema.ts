import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { PutAway_Item, PutAway_ItemSchema } from "./putaway_item.schema";
import { Document } from 'mongoose';
import { Transform, Type } from 'class-transformer';

@Schema()
export class PutAway {
    @Prop({ default: new Date().valueOf(), type: Number })
    id: number;

    @Prop({ default: "", type: String })
    no: string;

    @Prop({ default: "", type: String })
    putaway_client: string;

    @Prop({ default: "", type: String })
    location_code: string;

    @Prop({ default: "", type: String })
    document_type: string;
    
    @Prop({ default: "", type: String })
    document_no: string;
    
    @Prop({ default: "", type: String })
    gate_entry_date: string;
    
    @Prop({ default: "", type: String })
    grndt: string;
    
    @Prop({ default: "", type: String })
    gate_entry_docno: string;
    
    @Prop({ default: "", type: String })
    gate_entry_document_type: string;
    
    @Prop({ default: "", type: String })
    grn_invoice_no: string;
    
    @Prop({ default: "", type: String })
    grn_invoice_date: string;
    
    @Prop({ default: "", type: String })
    putaway_type: string;
    
    @Prop({ default: 0, type: Number })
    total_putaway_quantity: number;
    
    @Prop({ default: 0, type: Number })
    total_invoice_quantity: number;
    
    @Prop({ default: 0, type: Number })
    status: number;
    
    @Prop({ default: "", type: String })
    created_by: string;
    
    @Prop({ default: "", type: String })
    modified_by: string;
    
    @Prop({ default: new Date(), type: Date })
    created_at: string;
    
    @Prop({ default: new Date(), type: Date })
    updated_at: string;

    @Prop({ type: [PutAway_ItemSchema] })
    putaway_item: [PutAway_Item];
}

export const PutAway_MODEL = PutAway.name; // User
export type PutAwayDocument = PutAway & Document;

export const PutAwaySchema = SchemaFactory.createForClass(PutAway);