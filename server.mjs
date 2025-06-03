//Import
import express from "express";
import dotenv from "dotenv";
import { globalError } from "./middleware/errorMiddleware.mjs";

//Setups
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
//Middleware
app.use(express.json());
//Routes

//ErrMiddleware
app.use(globalError);

//Listener
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
