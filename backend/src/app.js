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

// Start server
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://Dev2003:Devedsai%402003@cluster0.jbhmdfb.mongodb.net/VideoMeetApp?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(`✅ MONGO Connected DB Host: ${connectionDb.connection.host}`);

    // Use process.env.PORT directly — works with Render
    server.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Listening on port ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  }
};

start();

 




