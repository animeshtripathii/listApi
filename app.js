import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
 await connectDB();
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });


export  default app