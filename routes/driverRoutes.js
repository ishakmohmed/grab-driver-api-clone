import express from "express";
import { getDrivers } from "../controllers/driverController.js";

const router = express.Router();

router.route("/:customerRequestData").post(getDrivers);

export default router;
