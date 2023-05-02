import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Pledge = new Schema({
    username: {type: String},
    amount: {type: Number}

})

export default mongoose.model("Pledge", Pledge);