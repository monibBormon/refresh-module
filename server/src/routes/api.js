import express from "express";
import * as UsersController from "../controllers/UsersController.js";
import * as ProductsController from "../controllers/ProductsController.js";
import * as FileUploadController from "../controllers/FileUploadController.js";
import upload from "../middlewares/FileUploads.js";

const router = express.Router();

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.get("/logout", UsersController.logout);

// Product routes
router.post("/create-product", ProductsController.createProduct);
router.get("/all-product", ProductsController.getAllProduct);
router.delete("/delete-product/:id", ProductsController.deleteProduct);

// file routes
router.post(
  "/file-upload",
  upload.array("file", 20),
  FileUploadController.fileUpload
);

export default router;
