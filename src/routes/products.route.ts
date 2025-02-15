import { Router } from "express";

import ProductController from "@controllers/Product.controller";
import authMiddleware from "@middleware/auth.middleware";

export const ProductsRouter = Router();

const productController = new ProductController();

ProductsRouter.post("/products", authMiddleware, productController.postProduct)
  .get("/products/:productId", authMiddleware, productController.getProductById)
  .get("/products", authMiddleware, productController.getProducts)
  .get(
    "/products/category/:productCategory",
    authMiddleware,
    productController.getProductsByCategory
  )
  .put("/products/:productId", authMiddleware, productController.putProduct)
  .delete(
    "/products/:productId",
    authMiddleware,
    productController.deleteProductById
  );
