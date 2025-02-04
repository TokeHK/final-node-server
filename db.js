import mongoose from "mongoose";

const MONGO_URI = process.env.DB;

  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
    
 export default mongoose;