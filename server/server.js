import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connection from "./database/db.js";
import route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  }));
app.use("/", route);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

connection();

app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
