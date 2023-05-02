import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Pledge = new Schema({
    email: {type: String, require: true},
    amount: {type: Number, require: true}

})

export default mongoose.model("Pledge", Pledge);