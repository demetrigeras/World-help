import db from "./db/connection.js";
import routes from "./routes/index.js";
import express from "express";
import cors from 'cors'


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(logger("dev"));
app.use(cors("dev"))

app.use("/world-help", routes);

db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB!");

  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(`Express server running in development on: ${PORT}`);
  });
});
