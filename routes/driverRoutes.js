import express from "express";
import { getNearestDrivers } from "../controllers/driverController.js";

const router = express.Router();

router.route("/:customerRequestData").post(getNearestDrivers);

export default router;
