import express from "express";
import { ensureAuthenticated } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", ensureAuthenticated, (req, res) => {
  const isAuthenticated = req.isAuthenticated ? req.isAuthenticated() : false;
  res.render("dashboard", { isAuthenticated });
});

export default router;
