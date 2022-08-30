import express, { Request, Response } from "express";
import cors from "cors";
const PORT = process.env.PORT || 5000;
// Routes
import homeRouter from "../routes/home";

const app = express();

// Middleware
app.use(cors());

app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
