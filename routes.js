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
    const allData = await Data.find();
    response.json(allData);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.post("/post", async (request, response) => {

  const postData = request.body;
  const data = new Data({
    name: postData.name,
    frontImg: postData.frontImg,
    subpageImg: postData.subpageImg,
    frontMobileImg: postData.frontMobileImg,
    desc: postData.desc,
    header: postData.header,
    text1: postData.text1,
    text2: postData.text2,
    text3: postData.text3,
    bg: postData.bg,
    logo: postData.logo
  });

  try {
    const dataToSave = await data.save();
    /* console.log(data) */
    response.status(200).json(dataToSave);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

router.get("/getById/:id", async (request, response)=>{
  try {
    const data = await Data.findById(request.params.id);
    console.log(data)
    response.json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
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