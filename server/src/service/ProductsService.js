import mongoose from "mongoose";
import ProductModel from "../model/ProductModel.js";
const ObjectId = mongoose.Types.ObjectId;
export const createProductService = async (req) => {
  try {
    let reqBody = req.body;
    let data = await ProductModel.create(reqBody);
    return { status: true, data: data, msg: "Product create success." };
  } catch (e) {
    return { status: false, error: e };
  }
};

export const getAllProductService = async () => {
  try {
    let data = await ProductModel.find({});
    return { status: true, data: data };
  } catch (e) {
    return { status: false, error: e };
  }
};

export const deleteProductService = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    let result = await ProductModel.deleteOne({ _id: id });
    return { status: true, data: result, msg: "Product delete success." };
  } catch (e) {
    return { status: false, error: e };
  }
};
