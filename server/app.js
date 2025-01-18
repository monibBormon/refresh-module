import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import router from "./src/routes/api.js";

import {
  DATABASE,
  MAX_JSON_SIZE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from "./src/config/config.js";

const app = express();

// App Use Default Middleware
app.use(cors());
// app.use(
//   cors({
//     origin: "https://refresh-module.vercel.app",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.options("*", cors());

app.use(express.json({ limit: MAX_JSON_SIZE }));

app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(cookieParser());

// App Use Limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

// Cache
app.set("etag", WEB_CACHE);

// Database Connect
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", router);

app.use("/upload-file", express.static("uploads"));

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
