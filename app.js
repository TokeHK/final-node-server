import express from "express";
import { PORT } from "./config.js";
import routes from './routes.js'
import mongoose from "./db.js";
import cors from "cors"


const app = express();

const allowedOrigins = true;
app.use(cors({

  origin:allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus:204,
  
}));

app.use('/', routes);

app.listen(PORT, () => {
   
console.log("Server Listening and is ready on PORT:", PORT);
});