import express from "express";

const router = express.Router();

// Dashboard route
router.get("/", (req, res) => {
  const isAuthenticated = req.isAuthenticated ? req.isAuthenticated() : false;
  res.render("dashboard", { isAuthenticated });
});

export default router;
