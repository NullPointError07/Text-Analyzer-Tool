import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  res.redirect("/dashboard");
});

router.get("/login", (req, res) => {
  res.render("index");
});

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.redirect("/");
    }
    req.session.destroy(() => {
      res.redirect("/");
    });
  });
});

export default router;
