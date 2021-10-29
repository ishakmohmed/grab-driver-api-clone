import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import { seedData } from "./seed/driverSeeder.js";

const app = express();

import connectDb from "./utils/connectDb.js";
import driverRoutes from "./routes/driverRoutes.js";

// MongoDB database connection
await connectDb();

// To recognize incoming request as JSON object
app.use(express.json());

// Mock data seeding
seedData();

// Route(s)
app.use("/api/search/drivers", driverRoutes);

app.get("/", (req, res) => {
  res.send(
    "API is running! Please visit the following link to read instructions on how to use this API: https://github.com/ishakmohmed/grab-driver-api-clone"
  );
});

// No middleware (such as auth middleware) since this is a simple, public, demo API

// Port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${
      process.env.NODE_ENV || `development`
    } mode on port ${PORT}.`
  )
);
