import Driver from "../models/driverModel.js";
import mongoose from "mongoose";

// This grid (map) is assumed to be 20 by 20
// Therefore, maximum values of x and y respectively is 20
// The maximum value of willDriveDistance is assumed to be 40 throughout this data

const drivers = [
  new Driver({
    name: "Tony Stark",
    location: {
      x: 2,
      y: 4,
    },
    willDriveDistance: 10,
    carCapacity: 5,
  }),
  new Driver({
    name: "Amelia",
    location: {
      x: 6,
      y: 19,
    },
    willDriveDistance: 17,
    carCapacity: 3,
  }),
  new Driver({
    name: "Bob",
    location: {
      x: 15,
      y: 4,
    },
    willDriveDistance: 11,
    carCapacity: 3,
  }),
  new Driver({
    name: "John Smith",
    location: {
      x: 2,
      y: 17,
    },
    willDriveDistance: 40,
    carCapacity: 8,
  }),
  new Driver({
    name: "Amran",
    location: {
      x: 7,
      y: 3,
    },
    willDriveDistance: 8,
    carCapacity: 4,
  }),
  new Driver({
    name: "Jonathan",
    location: {
      x: 15,
      y: 15,
    },
    willDriveDistance: 29,
    carCapacity: 2,
  }),
  new Driver({
    name: "Cristiano Messi",
    location: {
      x: 19,
      y: 17,
    },
    willDriveDistance: 36,
    carCapacity: 5,
  }),
  new Driver({
    name: "Jordan Henderson",
    location: {
      x: 6,
      y: 1,
    },
    willDriveDistance: 28,
    carCapacity: 4,
  }),
  new Driver({
    name: "Leia",
    location: {
      x: 2,
      y: 5,
    },
    willDriveDistance: 35,
    carCapacity: 6,
  }),
  new Driver({
    name: "Rachel Chu",
    location: {
      x: 9,
      y: 19,
    },
    willDriveDistance: 10,
    carCapacity: 2,
  }),
  new Driver({
    name: "Alisha Roslan",
    location: {
      x: 5,
      y: 6,
    },
    willDriveDistance: 23,
    carCapacity: 3,
  }),
  new Driver({
    name: "Paul Pogba",
    location: {
      x: 2,
      y: 14,
    },
    willDriveDistance: 38,
    carCapacity: 6,
  }),
  new Driver({
    name: "Mosh Hamedani",
    location: {
      x: 0,
      y: 0,
    },
    willDriveDistance: 40,
    carCapacity: 5,
  }),
  new Driver({
    name: "Patrick Shyu",
    location: {
      x: 5,
      y: 6,
    },
    willDriveDistance: 22,
    carCapacity: 3,
  }),
  new Driver({
    name: "Clement Mihailescu",
    location: {
      x: 6,
      y: 5,
    },
    willDriveDistance: 8,
    carCapacity: 7,
  }),
  new Driver({
    name: "Narendra L.",
    location: {
      x: 16,
      y: 9,
    },
    willDriveDistance: 20,
    carCapacity: 6,
  }),
  new Driver({
    name: "Menk Ismail",
    location: {
      x: 14,
      y: 12,
    },
    willDriveDistance: 30,
    carCapacity: 2,
  }),
  new Driver({
    name: "Sirajun Noor",
    location: {
      x: 2,
      y: 8,
    },
    willDriveDistance: 40,
    carCapacity: 5,
  }),
  new Driver({
    name: "Peter Drury",
    location: {
      x: 6,
      y: 19,
    },
    willDriveDistance: 27,
    carCapacity: 3,
  }),
  new Driver({
    name: "Emma Roberts",
    location: {
      x: 19,
      y: 0,
    },
    willDriveDistance: 23,
    carCapacity: 4,
  }),
  new Driver({
    name: "Smith Rowe",
    location: {
      x: 0,
      y: 18,
    },
    willDriveDistance: 14,
    carCapacity: 3,
  }),
  new Driver({
    name: "Lia",
    location: {
      x: 5,
      y: 16,
    },
    willDriveDistance: 11,
    carCapacity: 4,
  }),
  new Driver({
    name: "Firdaus Wong",
    location: {
      x: 20,
      y: 4,
    },
    willDriveDistance: 11,
    carCapacity: 3,
  }),
  new Driver({
    name: "Chin Weng Hong",
    location: {
      x: 3,
      y: 7,
    },
    willDriveDistance: 12,
    carCapacity: 2,
  }),
  new Driver({
    name: "Ali Abu Ahmad",
    location: {
      x: 1,
      y: 13,
    },
    willDriveDistance: 6,
    carCapacity: 3,
  }),
  new Driver({
    name: "Athisha",
    location: {
      x: 4,
      y: 16,
    },
    willDriveDistance: 23,
    carCapacity: 4,
  }),
  new Driver({
    name: "Mo Salah",
    location: {
      x: 12,
      y: 19,
    },
    willDriveDistance: 33,
    carCapacity: 2,
  }),
  new Driver({
    name: "Elly Amran",
    location: {
      x: 11,
      y: 11,
    },
    willDriveDistance: 22,
    carCapacity: 8,
  }),
  new Driver({
    name: "Muhammad Abdullah",
    location: {
      x: 5,
      y: 7,
    },
    willDriveDistance: 29,
    carCapacity: 2,
  }),
  new Driver({
    name: "Slim Albaher",
    location: {
      x: 3,
      y: 18,
    },
    willDriveDistance: 39,
    carCapacity: 5,
  }),
];

let done = 0;

export const seedData = async () => {
  try {
    await Driver.deleteMany({});

    for (let i = 0; i < drivers.length; i++) {
      drivers[i].save(function (err, result) {
        done++;
      });
    }
  } catch (err) {
    console.error(err);
  }

  console.log("Mock data is seeded from seed script.");
};
