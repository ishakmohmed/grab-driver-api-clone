import mongoose from "mongoose";

import Driver from "../models/driverModel.js";
import calculateDistance from "../utils/calculateDistance.js";
import findNearestEligibleDriver from "../utils/findNearestEligibleDriver.js";

// @access       Public
// @description       Get nearest drivers
// @route         POST /api/search/drivers
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

    // STEP 2: some data validation (which follows the data validation implemented in driverSchema)
    // Reason I implemented these validation here is because there is no frontend for this project where validation usually takes place in frontend forms
    const { x: x1, y: y1 } = customerLocation;
    const { x: x2, y: y2 } = customerDestination;

    if (
      x1 > 20 ||
      x1 < 0 ||
      x2 > 20 ||
      x2 < 0 ||
      y1 > 20 ||
      y1 < 0 ||
      y2 > 20 ||
      y2 < 0
    )
      return res.json({
        error:
          "Values of x and y (coordinates) are assumed to be from 0 till 20 respectively. Please make sure your x and y (location) values follow the same.",
      });

    if (customerName.length < 1 || customerName.length > 50)
      return res.json({
        error:
          "Customer name must be at least 1 character and at most 50 characters.",
      });

    if (customerGuestCount < 1 || customerGuestCount > 7)
      return res.json({
        error:
          "Please enter a value from 2 till 7. This variable means the number of people who wants to get in the car (excluding driver). So, this includes you and your friends/family, not the driver. For this API, it is assumed that the biggest car can fit in 8 people at a time including the driver.",
      });

    // STEP 2: find the difference between customer location and destination
    const distanceBetweenCustomersLocationAndDestination = calculateDistance(
      customerLocation,
      customerDestination
    );

    // STEP 3: iterate through all driver documents and get drivers whose willDriveDistance is MORE THAN/EQUALS TO distance between customer's location and destination location, and at the same time whose carCapacity is MORE THAN/EQUALS TO customerGuestCount
    const drivers = await Driver.find({});
    const eligibleDrivers = drivers.filter(
      (d) =>
        d.willDriveDistance >= distanceBetweenCustomersLocationAndDestination &&
        d.carCapacity >= customerGuestCount
    );

    // STEP 4: now iterate through the latest documents we've got and add additional key-value pair to each document, which is the distance to user (because this is important for next step)
    const eligibleDriversWithDistanceToCustomers = eligibleDrivers.map((d) =>
      Object.assign(
        { distanceToUser: calculateDistance(customerLocation, d.location) },
        d._doc
      )
    );

    if (!eligibleDriversWithDistanceToCustomers[0])
      return res.status(404).json({
        message: "No driver found. Sorry, please try again later.",
      });

    // STEP 5: iterate through the recent driver documents you have (after they have passed all criterias and you added additional data like current distance to customers) and pick the driver with the lowest distance between that driver and customer, and send it as JSON document to the client (pick just one best driver)
    const nearestDriver = findNearestEligibleDriver(
      eligibleDriversWithDistanceToCustomers
    );

    return res.status(200).json({ nearestDriver });
  } catch (err) {
    console.error(err);
  }
};

// @access        Public
// @description      Get all drivers
// @route     GET /api/search/drivers
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
