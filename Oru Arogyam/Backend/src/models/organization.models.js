import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },

    name: { type: String, required: true }, 
    type: { 
      type: String, 
      enum: ["Agency", "Company", "Authority"], 
      required: true 
    }, 
    licenseNumber: { type: String, unique: true }, 
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: {
      street: String,
      city: String,
      district: String,
      state: String,
      pincode: String,
    },

    managerName: { type: String },
    department: { type: String }, 

   
    registeredWorkers: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Worker" }
    ],

    notes: { type: String },

  },
  { timestamps: true }
);

export const Organization = mongoose.model("Organization", organizationSchema);
