//Import
import express from "express";
import dotenv from "dotenv";

//Setups
const PORT = process.env.PORT || 3001;
const app = express();
//Middleware
app.use(express.json());
//Routes

//ErrMiddleware

//Listener
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
