import { Request, Response, NextFunction } from "express";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
}
