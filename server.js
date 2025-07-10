import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

const DBUSER = encodeURIComponent(process.env.DBUSER);
const DBPASS = encodeURIComponent(process.env.DBPASS);


// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });


mongoose.connect(
  `mongodb+srv://${DBUSER}:${DBPASS}@cluster0.n9ugke5.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`
).then(() => {
  console.log(" MongoDB connected");
  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
}).catch((err) => {
  console.error("MongoDB connection error:", err.message);
});

app.use("/api/users", userRouter);
