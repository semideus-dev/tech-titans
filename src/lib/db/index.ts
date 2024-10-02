// DATABASE
import mongoose from "mongoose";

const DATABASE_URI = process.env.DATABASE_URI;

const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!DATABASE_URI) {
    throw new Error("DATABASE_URI must be set");
  }

  if (!cached.promise) {
    const opts = {
      dbName: "tech-titans",
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
};
