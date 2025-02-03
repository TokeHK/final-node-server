import express from "express";
import dotenv from "dotenv";
import Data from "./models/Data.js";

dotenv.config();

const router = express.Router();

router.use(express.json());

router.get("/test", (request, response) => {
  response.send("Hello, World root!");
});

router.get("/getAllData", async (request, response) => {
  try {
    const cards = await Data.find();
    response.json(cards);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get("/getById/:id", async (request, response)=>{
  try {
    const data = await Data.findById(request.params.id);
    response.json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

export default router;