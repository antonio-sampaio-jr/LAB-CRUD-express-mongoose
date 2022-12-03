import {model,Schema} from "mongoose";

const purchaseSchema = new Schema({
    shippingAdress: {
        type:String,
        required:true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: "Album"
    }
});

const Purchase = model("Purchase",purchaseSchema);

export default Purchase;