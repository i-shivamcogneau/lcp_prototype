export class PutAway {
    id: number;
    no: string;
    putaway_client: string;
    location_code: string;
    document_type: string;
    document_no: string;
    gate_entry_date: string;
    grndt: string;
    gate_entry_docno: string;
    gate_entry_document_type: string;
    grn_invoice_no: string;
    grn_invoice_date: string;
    putaway_type: string;
    total_putaway_quantity: number;
    total_invoice_quantity: number;
    status: number;
    created_by: string;
    modified_by: string;
    created_at: string;
    updated_at: string;
    putaway_item: Putaway_item[];

    constructor(props) {
        if (!props.putaway_client)
            console.log('missing stuff')
        else {
            this.no = props.no || "PUTAWAY";
            this.putaway_client = props.putaway_client;
            this.location_code = props.location_code;
            this.document_type = props.document_type;
            this.document_no = props.document_no;
            this.gate_entry_docno = props.gate_entry_docno;
            this.gate_entry_document_type = props.gate_entry_document_type;
            this.grn_invoice_no = props.grn_invoice_no;
            this.grn_invoice_date = props.grn_invoice_date;
            this.putaway_type = props.putaway_type;
            this.total_putaway_quantity = props.total_putaway_quantity;
            this.total_invoice_quantity = props.total_invoice_quantity;
            this.status = props.status;
            this.created_by = props.created_by;
            this.modified_by = props.modified_by;

            if (props.putaway_item) {
                this.putaway_item = new Array(new Putaway_item(props.putaway_item[0]));

                for (let i = 1; i < props.putaway_item.length; i++) {
                    this.putaway_item.push(new Putaway_item(props.putaway_item[i]));
                }
            }


            this.id = new Date().valueOf();

            this.created_at = (JSON.parse(JSON.stringify(new Date()))).toString();
            this.updated_at = (JSON.parse(JSON.stringify(new Date()))).toString();
            this.gate_entry_date = (JSON.parse(JSON.stringify(new Date()))).toString();
            this.grndt = (JSON.parse(JSON.stringify(new Date()))).toString();
        }
    }


    setUpdate(toUpdate) {
        eval(`this.${toUpdate.key}=${toUpdate.value}`);
        this.updated_at = (JSON.parse(JSON.stringify(new Date()))).toString();
    }
}

export class Putaway_item {
    putaway_detail_id: number;
    item_no: string;
    item_id: number;
    description: string;
    bin_code: string;
    quantity: number;
    qc_status: string;
    box_no: string;
    lot_no: string;
    season_code: string;
    brand_code: string;
    pet_style_code: string;
    color_code: string;
    size_code: string;
    category_code: string;
    uom_id: number;
    code: string;

    constructor(props) {
        this.item_no = props.item_no;
        this.item_id = props.item_id;
        this.description = props.description;
        this.bin_code = props.bin_code;
        this.quantity = props.quantity;
        this.qc_status = props.qc_status;
        this.box_no = props.box_no;
        this.lot_no = props.lot_no;
        this.season_code = props.season_code;
        this.brand_code = props.brand_code;
        this.pet_style_code = props.pet_style_code;
        this.color_code = props.color_code;
        this.size_code = props.size_code;
        this.category_code = props.category_code;
        this.uom_id = props.uom_id;
        this.code = props.code;
        this.putaway_detail_id = props.putaway_detail_id;
    }
}