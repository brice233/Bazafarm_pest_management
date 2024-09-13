import mongoose from "mongoose";

interface Pest extends mongoose.Document {
  name: string;
  title: string;
  description: string;
  category: "negative" | "positive" | "neutral";
  imageUrl: string;
  impacts?: [string];
  causes?: [string];
  solutions?: [string];
  references?: [string];
}

const pestSchema = new mongoose.Schema<Pest>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    impacts: [{ type: String }],
    causes: [{ type: String }],
    solutions: [{ type: String }],
    references: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Pest>("Pest", pestSchema)