import { Router } from "express";

import ProductController from "@controllers/Product.controller";

export const ProductsRouter = Router();

const productController = new ProductController();

ProductsRouter.post("/products", productController.postProduct)
  .get("/products/:productId", productController.getProductById)
  .get("/products", productController.getProducts)
  .get("/products/:productCategory", productController.getProductsByCategory)
  .put("/products/:productId", productController.putProduct)
  .delete("/products/:productId", productController.deleteProductById);
