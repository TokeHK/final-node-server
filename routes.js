import express from "express";
//import morgan from 'morgan';
//import bodyParser from "body-parser";
import dotenv from "dotenv";
import Data from "./models/Data.js";
import res from "express/lib/response.js";

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

router.post("/post", async (request, response) => {

  const formData = request.body;
  
  const data = new Data({
    name: formData.name,
    img: formData.img,
    information: { 
      strength: formData.strength, 
      lives: formData.lives
     },
    text: formData.text
  });

  try {
    const dataToSave = await data.save();
    response.status(200).json(dataToSave);
  } catch (error) {
    response.status(400).json({ message: error.message });
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

router.get("/getByQuery", async(request, response)=>{

  try{
    const { param } = request.query;
    const data = await Data.find({
      //$or:[{ name: param }, {text: param }]//$or er en mongoose "eller" søgning på {name/text} param er søgeord
      $or: [
        { name: { $regex: new RegExp(param, 'i') } },
        { text: { $regex: new RegExp(param, 'i') } },
        //{ 'information.strength': { $eq: param } }
      ]
    });

    response.json(data);

  }catch(error) {
    console.error(error);
    response.status(500).json({message:error.message});
  };
});

/* crud = Create, Read, Update, Delete */

router.delete("/delete/:id", async(request, response)=>{

  try {
    const id = request.params.id;
    const data = await Data.findByIdAndDelete(id);
    response.send(`Document with [${data?.name}] was deleted`)

  } catch(error){
    response.status(400).json({message: error.message})
  }

});

router.put("/update/:id", async(request, response)=>{

  try {
    const id = request.params.id;
    const updateData = request.body;
    const options = { new: true };

    const result = await Data.findByIdAndUpdate(
      id, updateData, options
    );

    response.send(result);
  } catch (error) {
    response.status(400).json({message: error.message})
  }

});

export default router;