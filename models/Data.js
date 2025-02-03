import mongoose from "mongoose";

 const dataSchema = new mongoose.Schema({
    
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
      }
 })

 const Data = mongoose.model("DB", dataSchema);

 export default Data;
