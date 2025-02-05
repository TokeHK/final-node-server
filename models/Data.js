import mongoose from "mongoose";

 const dataSchema = new mongoose.Schema({
    
    name: {
      type: String,
      required: true,
    },
    frontImg: {
      type: String,
      required: true,
    },
    subpageImg: {
      type: String,
      required: true,
    },
    frontMobileImg: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: true,
    },
    text3: {
      
    },
    bg: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    }
 })

 const Data = mongoose.model("cards", dataSchema);

 const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Message = mongoose.model("messages", messageSchema);

export default Data;