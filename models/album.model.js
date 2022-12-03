import {model,Schema} from "mongoose";

const albumSchema = new Schema({
    performer: {
        type:String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    cost: {
        type: Number
    }
});

const Album = model("Album",albumSchema);

export default Album;
