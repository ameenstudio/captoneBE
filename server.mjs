//Import
import express from "express";
import dotenv from "dotenv";
import connectDB from './db/conn.mjs';
import { globalError } from "./middleware/errorMiddleware.mjs";
import spoolRoutes from './routes/spoolRoutes.mjs'
import cors from 'cors'


//Setups
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
//Middleware
app.use(express.json());
connectDB();
//Routes
app.use('/api/spool', spoolRoutes)
//ErrMiddleware
app.use(globalError);

//Listener
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
 