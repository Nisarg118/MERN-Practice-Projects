import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect("mongodb://localhost:27017/crud-mern");
    if (res) {
      console.log("connected to database");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToMongo;
