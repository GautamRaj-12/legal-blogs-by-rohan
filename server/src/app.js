import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//   })
// );
// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import categoryRouter from "./routes/category.routes.js"
//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/categories",categoryRouter);
export default app;
