import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
// import routes
import authRoutes from "./modules/auth/auth.routes";

const app = express();

//--  middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//-- Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hi this is the api base endpoint for FEEDPOST");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
