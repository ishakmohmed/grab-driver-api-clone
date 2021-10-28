import mongoose from "mongoose";

// I just assumed minimum and maximum values for data validation, for example, maximum value for carCapacity is set to 15
// This grid (map) is assumed to be 20 by 20
// Therefore, maximum values of x and y respectively is 20
// The maximum value of willDriveCapavity is assumed to be 40 throughout the seed data
// The seed data is available in "./seed/driverSeeder.js" which will be populated automatically without you having to do any extra steps

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 50,
    trim: true,
    default: "Default Name",
    required: true,
  },
  location: {
    x: {
      type: Number,
      min: 0,
      max: 20,
      default: 0,
      required: true,
    },
    y: {
      type: Number,
      min: 0,
      max: 20,
      default: 0,
      required: true,
    },
  },
  willDriveDistance: {
    type: Number,
    min: 1,
    max: 40,
    default: 1,
    required: true,
  },
  carCapacity: {
    type: Number,
    min: 1,
    max: 15,
    default: 1,
    required: true,
  },
});

export default mongoose.model("Driver", driverSchema);
