import Driver from "../models/driverModel.js";

// @access  Public
// @description    Get nearest drivers
// @route   POST /api/search/drivers, here is a sample JSON request you can send to test this route handler:
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
  return res.json({
    message: "you did it!",
  });
};
