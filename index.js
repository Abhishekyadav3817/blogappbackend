import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads")); 

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
const PORT = process.env.PORT || 4000;
connectDB().then(
  app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
  })
)
