import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
const app = express();

import connectDb from "./utils/connectDb.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import driverRoutes from "./routes/driverRoutes.js";

connectDb();

app.use(express.json());

app.use("/api/search", driverRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`)
);
