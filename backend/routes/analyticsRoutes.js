import express from "express";
import { getLeadAnalytics } from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/", getLeadAnalytics);

export default router;
