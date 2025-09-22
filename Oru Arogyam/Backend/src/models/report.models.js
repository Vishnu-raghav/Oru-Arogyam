import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  workerId: { type: mongoose.Schema.Types.ObjectId, ref: "Worker", required: true },
  hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: true },
  checkupType: { type: String, required: true }, 
  diagnosis: { type: String }, 
  prescription: { type: String }, 
  reportFile: { type: String }, 
  nextCheckupDate: { type: Date }, 
  createdAt: { type: Date, default: Date.now },
});

export const Report = mongoose.model("Report", reportSchema);
