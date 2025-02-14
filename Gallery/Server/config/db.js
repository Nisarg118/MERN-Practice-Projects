import mongoose, { mongo } from "mongoose";

const ConnectToMongo = async () => {
  const res = await mongoose.connect(
    "mongodb://localhost:27017/mern-gallery-app"
  );
  if (res) {
    console.log("Connected to database");
  }
};

export default ConnectToMongo;
