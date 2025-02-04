import mongoose from "mongoose";

//const MONGO_URI = process.env.DB;
const MONGO_URI = "mongodb+srv://test:kVoPm55JmzN17pV6@final-advanced-frontend.lerwh.mongodb.net/?retryWrites=true&w=majority"

  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
    
 export default mongoose;