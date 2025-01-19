import path from "path";
import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import session from "express-session";
import textRoutes from "./routes/textRoutes";
import authRoutes from "./routes/authRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import { connectDB } from "./db/connectDB";
import { apiLimiter } from "./middleware/throttling";
import { checkCache } from "./middleware/cacheFunc";
import "./auth/googleStrategy";

const app = express();
dotenv.config();
connectDB();

app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(apiLimiter);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const isAuthenticated = req.isAuthenticated ? req.isAuthenticated() : false;
  res.render("index", { isAuthenticated });
});

app.use("/api", checkCache, textRoutes);
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
