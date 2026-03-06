import mongoose from "mongoose"

export const connectDB = async () => {

  if (mongoose.connections[0].readyState) return
try {
  await mongoose.connect(process.env.MONGO_URI as string);
} catch (err) {
  console.error("mongo connect failed", err);
  throw err;
}

  console.log("MongoDB Connected")
}