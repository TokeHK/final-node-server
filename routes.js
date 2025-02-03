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

  const formData = request.body;
  const data = new Data({
    name: formData.name,
    frontImg: formData.frontImg,
    subpageImg: formData.subpageImg,
    frontMobileImg: formData.frontMobileImg,
    desc: formData.desc,
    header: formData.header,
    text1: formData.text1,
    text2: formData.text2,
    text3: formData.text3,
    bg: formData.bg
  });
  /* 
{
	"name":"GetInTouch",
	"frontImg":"front-desktop/front-get-in-touch.png",
	"subpageImg":"front-desktop/front-getintouch-link.png",
	"frontMobileImg":"front-mobil/weba-mobil.getintouch.png",
	"desc":"Get in touch page link",
	"header":"There for you and care for you",
	"text1":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	"text2":"standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	"text3":[{"img":"front-desktop/whatwedo-small.png", "email":"lt@coolish.com"}, {"img":"front-desktop/maintainable-small.png", "email":"pr@coolish.com"}, {"img":"front-desktop/getintouch-small.png", "email":"mn@coolish.com"}],
	"bg":"#ffb472"
}

{
	"name":"Maintainable",
	"frontImg":"front-desktop/front-maintainable.png",
	"subpageImg":"front-desktop/front-maintainable-link.png",
	"frontMobileImg":"front-mobil/weba-3-mobil-maintainable.png",
	"desc":"Maintainable page link",
	"header":"Design is the matter of choice",
	"text1":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
	"text2":"standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	"text3":"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
	"bg":"#bfddef"
}

{
	"name":"WhatWeDo",
	"frontImg":"front-desktop/front-what-we-do.png",
	"subpageImg":"front-desktop/front-what-we-do-link.png",
	"frontMobileImg":"front-mobil/weba-2-mobil-whatwedo.png",
	"desc":"What we do page link",
	"header":"Keeping your all upto date",
	"text1":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
	"text2":"standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	"text3":"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
	"bg":"#abcfe6"
}
  
  */

  try {
    const dataToSave = await data.save();
    console.log(data)
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