import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

import connectDb from "./utils/connectDb.js";
import driverRoutes from "./routes/driverRoutes.js";

// MongoDB database connection
connectDb();

// To recognize incoming request as JSON object
app.use(express.json());

// Route(s)
app.use("/api/search/drivers", driverRoutes);

// No middleware (such as auth middleware) because this is a public, demo API

// Port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`)
);
