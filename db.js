import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://HK:HRqIZ5tzVBr4rZEA@final-advanced-frontend.lerwh.mongodb.net/?retryWrites=true&w=majority&appName=final-advanced-frontend"

  mongoose
    .connect(MONGO_URI)

    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
    

export default mongoose;