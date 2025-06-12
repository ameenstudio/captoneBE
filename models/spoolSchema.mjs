import mongoose from "mongoose";
const spoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
    enum: ['PLA', 'ABS', 'PETG', 'TPU', 'Nylon', 'Other'],
  },
  diameter: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  printTemperature: {
    type: Number,
    required: true,
  },
  plateTemperature: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

spoolSchema.index({ material: 1, color: 1 }); // Compound index for material and color queries

export default mongoose.model("Spool", spoolSchema)