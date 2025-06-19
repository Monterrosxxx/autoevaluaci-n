import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected successfully");
} catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); 
}

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