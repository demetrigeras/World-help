import Donor from "../models/Charity.js"


export const getDonors = async (req, res) => {
  try {
    const donor = await Donor.find();
    res.json(donor);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getDonor = async (req, res) => {
  try {
    const { id } = req.params;

    const donor = await Donor.findById(id);
    res.json(donor);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createDonor = async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save(donor);
    res.status(201).json(donor);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateDonor = async (req, res) => {
  const { id } = req.params;
  const donor = await Donor.findByIdAndUpdate(id, req.body);
  res.status(200).json(donor);
};

export const deleteDonor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Donor.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Donor Deleted!");
    }

    throw new Error("Donor not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
