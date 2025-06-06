import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const response=await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
    return response
  } catch (error) {
    console.log("error to connect DB");
  }
};
