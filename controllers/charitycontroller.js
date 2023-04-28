// import Charity from "../models/Cat.js";
import Charity from "./models/Charity.js"


export const getCharities = async (req, res) => {
  try {
    const charity = await Charity.find();
    res.json(charity);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getCharity = async (req, res) => {
  try {
    const { id } = req.params;

    const charity = await Charity.findById(id);
    res.json(charity);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createCharity = async (req, res) => {
  try {
    const charity = new Charity(req.body);
    await charity.save(charity);
    res.status(201).json(charity);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateCharity = async (req, res) => {
  const { id } = req.params;
  const charity = await Charity.findByIdAndUpdate(id, req.body);
  res.status(200).json(charity);
};

export const deleteCharity = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Charity.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Charity Deleted!");
    }

    throw new Error("Charity not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
