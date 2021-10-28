import express from "express";
import {
  getAllDrivers,
  getNearestDrivers,
} from "../controllers/driverController.js";

const router = express.Router();

router.route("/").get(getAllDrivers);
router.route("/").post(getNearestDrivers);

export default router;
