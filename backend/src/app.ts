import express, { Request, Response } from "express";
import cors from "cors";
// DB
import pool from "../configs/db";

const PORT = process.env.PORT || 5000;
// Routes
import homeRouter from "../routes/home";

const app = express();

// Middleware
app.use(cors());

// Connect to dev database
const connect = async () => {
  try {
    const client = await pool.connect();;
    console.log("connected to database");
    const data = await client.query(`SELECT * FROM users`);
    console.log(data.rows);
    client.release();
  } catch (error) {
    console.log(error);
  }
};
connect();

app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
