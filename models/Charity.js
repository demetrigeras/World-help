import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Charity = new Schema({
  name: { type: String },
  category: { type: String },
  private_donations: { type: String },
  total_revenue: { type: String },
  fundraising_efficiency: { type: Number },
  charitable_commitment: { type: Number },
  logo: { type: String },
  website: { type: String },
  mission_statements: { type: String }
});

export default mongoose.model("Charity", Charity);
