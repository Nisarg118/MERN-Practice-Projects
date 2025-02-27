import Product from "../Models/Product.model.js";

//add product
export const addProductController = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ message: "product added successully", product });
  } catch (error) {
    console.log("Error in addProductController function : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get all products
export const getProductsController = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ message: "success", product });
  } catch (error) {
    console.log("Error in getProductsController function : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
