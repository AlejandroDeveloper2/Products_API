import { NextFunction, Request, Response } from "express";

import ProductService from "@services/Product.service";
import { Product } from "@models/Product.model";

import { handleHttp } from "@utils/index";

const productService = new ProductService();

class ProductController {
  public async postProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const newProduct: Product = req.body;
      const product = await productService.createNewProduct(newProduct);
      handleHttp<Product>(
        res,
        { data: product, message: "Producto agregado correctamente" },
        201
      );
    } catch (error) {
      next(error);
    }
  }

  public async getProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsProductId: string = req.params.productId;
      const productId: number = parseInt(paramsProductId);
      const product = await productService.findProductById(productId);

      handleHttp<Product>(
        res,
        { data: product, message: "Producto obtenido correctamente" },
        200
      );
    } catch (error) {
      next(error);
    }
  }

  public async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.findAllProducts();
      handleHttp<Product[]>(
        res,
        { data: products, message: "Productos obtenidos correctamente" },
        200
      );
    } catch (error) {
      next(error);
    }
  }

  public async getProductsByCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const productCategory = req.params.productCategory;
    try {
      const products = await productService.findProductsByCategory(
        productCategory
      );
      handleHttp<Product[]>(
        res,
        { data: products, message: "Productos obtenidos correctamente" },
        200
      );
    } catch (error) {
      next(error);
    }
  }

  public async putProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const paramsProductId: string = req.params.productId;
      const productId: number = parseInt(paramsProductId);
      const productData: Product = req.body;
      const updatedProduct = await productService.modifyProduct(
        productId,
        productData
      );
      handleHttp<Product>(
        res,
        {
          data: updatedProduct,
          message: "Producto actualizado correctamente",
        },
        200
      );
    } catch (error) {
      next(error);
    }
  }

  public async deleteProductById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const paramsProductId: string = req.params.productId;
      const productId: number = parseInt(paramsProductId);
      const deletedProduct = await productService.removeProductById(productId);
      handleHttp<Product>(
        res,
        {
          data: deletedProduct,
          message: "Producto eliminado correctamente",
        },
        200
      );
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController;
