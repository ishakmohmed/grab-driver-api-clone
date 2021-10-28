import Driver from "../models/driverModel.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/temporaryDB");

// This grid (map) is assumed to be 20 by 20
// Therefore, maximum values of x and y respectively is 20
// The maximum value of willDriveCapavity is assumed to be 40 throughout this data

const drivers = [
  new Driver({
    name: "Tony Stark",
    location: {
      x: 2,
      y: 4,
    },
    willDriveCapacity: 10,
    carCapacity: 5,
  }),
  new Driver({
    name: "Amelia",
    location: {
      x: 6,
      y: 19,
    },
    willDriveCapacity: 17,
    carCapacity: 3,
  }),
  new Driver({
    name: "Bob",
    location: {
      x: 15,
      y: 4,
    },
    willDriveCapacity: 11,
    carCapacity: 3,
  }),
  new Driver({
    name: "John Smith",
    location: {
      x: 2,
      y: 17,
    },
    willDriveCapacity: 40,
    carCapacity: 8,
  }),
  new Driver({
    name: "Amran",
    location: {
      x: 7,
      y: 3,
    },
    willDriveCapacity: 8,
    carCapacity: 4,
  }),
  new Driver({
    name: "Jonathan",
    location: {
      x: 15,
      y: 15,
    },
    willDriveCapacity: 29,
    carCapacity: 2,
  }),
  new Driver({
    name: "Cristiano Messi",
    location: {
      x: 19,
      y: 17,
    },
    willDriveCapacity: 36,
    carCapacity: 5,
  }),
  new Driver({
    name: "Jordan Henderson",
    location: {
      x: 6,
      y: 1,
    },
    willDriveCapacity: 28,
    carCapacity: 4,
  }),
  new Driver({
    name: "Leia",
    location: {
      x: 2,
      y: 5,
    },
    willDriveCapacity: 35,
    carCapacity: 6,
  }),
  new Driver({
    name: "Rachel Chu",
    location: {
      x: 9,
      y: 19,
    },
    willDriveCapacity: 10,
    carCapacity: 2,
  }),
  new Driver({
    name: "Alisha Roslan",
    location: {
      x: 5,
      y: 6,
    },
    willDriveCapacity: 23,
    carCapacity: 3,
  }),
  new Driver({
    name: "Paul Pogba",
    location: {
      x: 2,
      y: 14,
    },
    willDriveCapacity: 38,
    carCapacity: 6,
  }),
  new Driver({
    name: "Mosh Hamedani",
    location: {
      x: 0,
      y: 0,
    },
    willDriveCapacity: 40,
    carCapacity: 5,
  }),
  new Driver({
    name: "Patrick Shyu",
    location: {
      x: 5,
      y: 6,
    },
    willDriveCapacity: 22,
    carCapacity: 3,
  }),
  new Driver({
    name: "Clement Mihailescu",
    location: {
      x: 6,
      y: 5,
    },
    willDriveCapacity: 8,
    carCapacity: 6,
  }),
  new Driver({
    name: "Narendra L.",
    location: {
      x: 16,
      y: 9,
    },
    willDriveCapacity: 20,
    carCapacity: 6,
  }),
  new Driver({
    name: "Menk Ismail",
    location: {
      x: 14,
      y: 12,
    },
    willDriveCapacity: 30,
    carCapacity: 2,
  }),
  new Driver({
    name: "Sirajun Noor",
    location: {
      x: 2,
      y: 8,
    },
    willDriveCapacity: 40,
    carCapacity: 5,
  }),
  new Driver({
    name: "Peter Drury",
    location: {
      x: 6,
      y: 19,
    },
    willDriveCapacity: 27,
    carCapacity: 3,
  }),
  new Driver({
    name: "Emma Roberts",
    location: {
      x: 19,
      y: 0,
    },
    willDriveCapacity: 23,
    carCapacity: 4,
  }),
  new Driver({
    name: "Smith Rowe",
    location: {
      x: 0,
      y: 18,
    },
    willDriveCapacity: 14,
    carCapacity: 3,
  }),
  new Driver({
    name: "Lia",
    location: {
      x: 5,
      y: 16,
    },
    willDriveCapacity: 11,
    carCapacity: 4,
  }),
  new Driver({
    name: "Firdaus Wong",
    location: {
      x: 20,
      y: 4,
    },
    willDriveCapacity: 11,
    carCapacity: 3,
  }),
  new Driver({
    name: "Chin Weng Hong",
    location: {
      x: 3,
      y: 7,
    },
    willDriveCapacity: 12,
    carCapacity: 2,
  }),
  new Driver({
    name: "Ali Abu Ahmad",
    location: {
      x: 1,
      y: 13,
    },
    willDriveCapacity: 6,
    carCapacity: 3,
  }),
  new Driver({
    name: "Athisha",
    location: {
      x: 4,
      y: 16,
    },
    willDriveCapacity: 23,
    carCapacity: 4,
  }),
  new Driver({
    name: "Mo Salah",
    location: {
      x: 12,
      y: 19,
    },
    willDriveCapacity: 33,
    carCapacity: 2,
  }),
  new Driver({
    name: "Elly Amran",
    location: {
      x: 11,
      y: 11,
    },
    willDriveCapacity: 22,
    carCapacity: 8,
  }),
  new Driver({
    name: "Muhammad Abdullah",
    location: {
      x: 5,
      y: 7,
    },
    willDriveCapacity: 29,
    carCapacity: 2,
  }),
  new Driver({
    name: "Slim Albaher",
    location: {
      x: 3,
      y: 18,
    },
    willDriveCapacity: 39,
    carCapacity: 5,
  }),
];

let done = 0;

// const destroyData = async () => {
//   try {
//     await Driver.deleteMany();

//     console.log("Data destroyed!");
//     process.exit();
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

function exit() {
  mongoose.disconnect();
}

export const seedData = () => {
  for (let i = 0; i < drivers.length; i++) {
    drivers[i].save(function (err, result) {
      done++;

      // Delete this line and the next line
      // if (done === drivers.length) exit();
    });
  }

  console.log("Mock data is seeded.");
};
