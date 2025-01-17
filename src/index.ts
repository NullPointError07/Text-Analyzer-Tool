import express from "express";
import textRoutes from "./routes/textRoutes";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// Routes
app.use("/api", textRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
