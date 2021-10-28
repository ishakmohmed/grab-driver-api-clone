import mongoose from "mongoose";

import Driver from "../models/driverModel.js";

// @access       Public
// @description       Get nearest drivers
// @route         POST /api/search/drivers, here is a sample JSON request you can send to test this route handler:
// {
//   "customerName": "Mohmed Ishak",
//   "customerLocation": {
//     "x": 2,
//     "y": 7
//   },
//   "customerDestination": {
//     "x": 7,
//     "y": 9
//   },
//   "customerGuestCount": 2
// }
export const getNearestDrivers = async (req, res) => {
  try {
    // STEP 1: check if user has sent all relevant data, and if no, throw error
    const {
      customerName,
      customerLocation,
      customerDestination,
      customerGuestCount,
    } = req.body;

    if (
      !customerName ||
      !customerLocation ||
      !customerDestination ||
      !customerGuestCount
    )
      return res.status(404).json({
        message:
          "Please make sure you provide customerName, customerLocation, customerDestination, and customerGuestCount in appropriate JSON format and structure.",
      });

    // STEP 2: find the difference between customer location and destination (I will use a simple maths formula that I learned in primary school)
    // Formula to find distance between 2 points on a grid/plane where each points have x-axis value and y-axis value:
    // Distance (a, b) = √(x2 - x1)^2 + (y2 - y1)^2, where square root is applied to the entire formula
    // If this formula is unclear, please refer this link: https://orion.math.iastate.edu/dept/links/formulas/form2.pdf
    const distanceBetweenCustomersLocationAndDestination = Math.sqrt(
      Math.pow(customerLocation.x - customerDestination.x, 2) +
        Math.pow(customerLocation.y - customerDestination.y, 2)
    );

    // STEP 3: iterate through all driver documents and get drivers whose willDriveDistance is MORE THAN distance between customer's location and destination location, and at the same time whose carCapacity is MORE THAN customerGuestCount
    const eligibleDriversForCurrentCustomer = await Driver.find({
      willDriveDistance: {
        $gte: distanceBetweenCustomersLocationAndDestination,
      },
      carCapacity: {
        $gte: customerGuestCount,
      },
    });

    console.log("man, the new arr is", eligibleDriversForCurrentCustomer);

    // STEP 4: this is connected to previous task. When the driver's document passes all the eligible criteria, take that document and at the same time calculate the distance between the driver and the customer right away. This is a little query optimization thing.

    // STEP 5: iterate through the recent driver documents you have (after they have passed all criterias) and pick the driver with the lowest distance between that driver and customer, and send it as JSON document to the client
  } catch (err) {
    console.error(err);
  }
};

// @access        Public
// @description      Get all drivers
// @route     POST /api/search/drivers, here is a sample JSON request you can send to test this route handler:
export async function getAllDrivers(req, res) {
  try {
    const allDrivers = await Driver.find({});

    return res.json({
      allDrivers,
    });
  } catch (error) {
    console.log(error);
  }
}
