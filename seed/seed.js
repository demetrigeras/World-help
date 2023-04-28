import db from "../db/connection.js";
import Charity from "../models/Charity.js";
import charityjson from "../db/charity.json" assert { type: "json" };

const insertData = async () => {
    await db.dropDatabase()
    await Charity.insertMany(charityjson);
    db.close();
}

insertData();