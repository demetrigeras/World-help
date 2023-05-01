import Pledge from '../models/Pledge.js'


export const getPledges = async (req, res) => {
  try {
    const pledge = await Pledge.find()
    res.json(pledge)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getPledge = async (req, res) => {
  try {
    const { id } = req.params
    const pledge = await Pledge.findById(id)
    if (pledge) {
      return res.json(pled)
    }
    res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createPledge = async (req, res) => {
  try {
    const pledge = new Pledge(req.body)
    await pledge.save()
    res.status(201).json(pledge)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updatePledge = async (req, res) => {
  const { id } = req.params
  const pledge = await Pledge.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(pledge)
}

export const deletePledge = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Pledge.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Pledge deleted')
    }
    throw new Error('Pledge not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}
