import {
  createProductService,
  deleteProductService,
  getAllProductService,
} from "../service/ProductsService.js";

//! create Product
export const createProduct = async (req, res) => {
  let result = await createProductService(req);
  return res.status(200).json(result);
};

export const getAllProduct = async (req, res) => {
  let result = await getAllProductService(req);
  return res.status(200).json(result);
};

export const deleteProduct = async (req, res) => {
  let result = await deleteProductService(req);
  return res.status(200).json(result);
};
