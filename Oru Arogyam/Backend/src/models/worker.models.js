import mongoose from "mongoose";

const workerSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },

    name: { type: String, required: true },
    fatherName: { type: String },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },

    idProofType: { 
      type: String, 
      enum: ["VoterID", "RationCard", "DrivingLicense", "Passport", "WorkerID", "Other"], 
      required: true 
    },
    idProofNumber: { type: String, required: true },

    contact: { type: String, required: true },
    emergencyContact: { type: String },
    address: {
      currentAddress: String,
      permanentAddress: String,
      state: String,
      district: String,
      pincode: String,
    },

    skills: [String], 
    workType: { type: String }, 
    employer: { type: String }, 
    agency: { type: mongoose.Schema.Types.ObjectId, ref: "Agency" }, 

    language: { type: String },

    reports: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Report" }
    ], 
    bloodGroup: { type: String },
    medicalHistory: { type: String },

    qrCode: { type: String }, 

  },
  { timestamps: true }
);

export const Worker = mongoose.model("Worker", workerSchema);
