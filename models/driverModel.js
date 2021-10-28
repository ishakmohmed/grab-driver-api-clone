import mongoose from "mongoose";

// I just assumed minimum and maximum values for data validation, for example, maximum value for willDriveDistance is set to 1 million

const driverSchema = new mongoose.Schema({
  customerName: {
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
      max: 1000000,
      default: 0,
      required: true,
    },
    y: {
      type: Number,
      min: 0,
      max: 1000000,
      default: 0,
      required: true,
    },
  },
  willDriveDistance: {
    type: Number,
    min: 1,
    max: 1000000,
    default: 1,
    required: true,
  },
  carCapacity: {
    type: Number,
    min: 1,
    max: 1000000,
    default: 1,
    required: true,
  },
});

export default mongoose.model("Driver", driverSchema);