import mongoose from "mongoose";

const governmentProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  designation: { type: String, enum: ["State Admin", "District Officer"], default: "State Admin" },
  department: { type: String, default: "Health Service Department" },
  district: { type: String },  
  accessLevel: { type: String, enum: ["state", "district"], default: "state" }
});

export const GovernmentProfile = mongoose.model("GovernmentProfile", governmentProfileSchema);
