import express, { Request, Response } from "express";
import Home from "./route/Dashboard";
import config from "../config/config";

const app = express();
config();
app.use(express.json());
app.use("/api", Home);

app.listen(5000, () => console.log("Server is running on Port 5000"));
