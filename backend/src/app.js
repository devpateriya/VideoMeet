import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// Middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// Routes
app.use("/api/v1/users", userRoutes);

const start = async () => {
  try {
    const connectionDb = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`✅ MONGO Connected DB Host: ${connectionDb.connection.host}`);

    server.listen(process.env.PORT, () => {
      console.log(`🚀 Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  }
};


start();

 




