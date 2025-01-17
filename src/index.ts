import express from "express";
import passport from "passport";
import session from "express-session";
import textRoutes from "./routes/textRoutes";

const app = express();

app.use(express.json());
app.use(session({ secret: process.env.SECRET || "", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000;

// Routes
app.use("/api", textRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
