import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Pledge = new Schema({
    username: {type: String},
    Amount:{type: String}

})

export default mongoose.model("Pledge", Pledge);