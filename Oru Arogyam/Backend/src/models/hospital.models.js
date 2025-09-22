import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },

   
    hospitalName: { type: String, required: true },
    licenseNumber: { type: String, required: true, unique: true },
    address: {
      street: String,
      city: String,
      district: String,
      state: String,
      pincode: String,
    },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    doctorName: { type: String }, 
    department: { type: String }, 

    reports: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Report" }
    ],

    registeredWorkers: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Worker" }
    ],

  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
