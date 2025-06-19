import mongoose from "mongoose";
import {config} from "./src/config.js";

mongoose.connect(config.db.URL);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Database connected successfully");
});

connection.on("disconnected", () => {
    console.log("Database is disconnected");
});

connection.on("error", (err) => {
    console.error("Database connection error:", err);
});