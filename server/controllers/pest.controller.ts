import { Request, Response } from "express";
import pestModel from "../models/pest.model";

export const createPest = async (req: Request, res: Response) => {
  const newPest = await pestModel.create(req.body);
  res.status(201).json(newPest);
};

export const getPests = async (req: Request, res: Response) => {
  const pests = await pestModel.find();

  if (!pests) {
    return res.status(404).json({ message: "Pests not found" });
  }

  // Return the found pests
  res.status(200).json(pests);
};

export const getPestData = async (req: Request, res: Response) => {
  const { id } = req.params;
  const pest = await pestModel.findById(id);

  if (!pest) {
    return res.status(404).json({ message: "Pest not found" });
  } else {
    return res.status(200).json(pest);
  }
};

export const updatePest = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedPest = await pestModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedPest) {
      return res.status(404).json({ message: "Pest not found" });
    }

    res.status(200).json(updatedPest);
  } catch (error) {
    res.status(400).json({ message: "Error updating pest", error });
  }
};

export const deletePest = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedPest = await pestModel.findByIdAndDelete(id);

    if (!deletedPest) {
      return res.status(404).json({ message: "Pest not found" });
    }

    res.status(200).json({ message: "Pest deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting pest", error });
  }
};
