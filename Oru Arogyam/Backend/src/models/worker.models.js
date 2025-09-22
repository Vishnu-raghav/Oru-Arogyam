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
import mongoose from "mongoose";

const governmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true 
    },

    name: { type: String, required: true }, 
    department: { type: String, default: "Health Department" }, 

    email: { type: String, required: true, unique: true }, 
    contactNumber: { type: String }, 

  
    notifications: [
      {
        message: String, 
        targetType: { type: String, enum: ["Hospital", "Organization"] }, 
        targetId: { type: mongoose.Schema.Types.ObjectId, refPath: "notifications.targetType" },
        createdAt: { type: Date, default: Date.now },
        status: { type: String, enum: ["Sent", "Pending"], default: "Sent" }
      }
    ],

    analyticsCache: {
      totalWorkers: { type: Number, default: 0 },
      totalOrganizations: { type: Number, default: 0 },
      totalHospitals: { type: Number, default: 0 },
      highRiskWorkers: { type: Number, default: 0 }
    }

  },
  { timestamps: true }
);

export const Government = mongoose.model("Government", governmentSchema);
