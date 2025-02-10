import prismaClient from "@config/PrismaClient";

import { Product } from "@models/Product.model";

import { AppError, handlePrismaError } from "@utils/index";

class ProductService {
  public async createNewProduct(product: Product): Promise<Product> {
    try {
      const newProduct: Product = await prismaClient.product.create({
        data: product,
      });
      return newProduct;
    } catch (error) {
      return handlePrismaError(
        error,
        "Ha ocurrido un error al intentar guardar el producto",
        {
          duplicatedRecordMessage:
            "¡Ya existe un producto con ese nombre en la base de datos!",
        }
      );
    }
  }

  public async findProductById(productId: number): Promise<Product> {
    try {
      const product: Product | null = await prismaClient.product.findUnique({
        where: { id: productId },
      });
      if (!product)
        throw new AppError(
          404,
          `¡No se encuentra ningún producto con el id ${productId}!`
        );
      return product;
    } catch (error) {
      return handlePrismaError(
        error,
        "Ha ocurrido un error al intentar obtener el producto",
        {}
      );
    }
  }

  public async findAllProducts(): Promise<Product[]> {
    try {
      const products: Product[] = await prismaClient.product.findMany();
      return products;
    } catch (error) {
      return handlePrismaError(
        error,
        "Ha ocurrido un error al intentar obtener los productos",
        {}
      );
    }
  }

  public async findProductsByCategory(
    productCategory: string
  ): Promise<Product[]> {
    try {
      const products: Product[] = await prismaClient.product.findMany({
        where: { category: productCategory },
      });
      return products;
    } catch (error) {
      return handlePrismaError(
        error,
        `Ha ocurrido un error al intentar obtener los productos de la categoria ${productCategory}`,
        {}
      );
    }
  }

  public async modifyProduct(
    productId: number,
    product: Product
  ): Promise<Product> {
    try {
      const updatedProduct: Product = await prismaClient.product.update({
        where: { id: productId },
        data: product,
      });
      return updatedProduct;
    } catch (error) {
      return handlePrismaError(
        error,
        `Ha ocurrido un error al intentar actualizar el producto con el id: ${productId}`,
        {
          notFoundMessage: `No existe un producto con el id: ${productId}`,
        }
      );
    }
  }

  public async removeProductById(productId: number): Promise<Product> {
    try {
      const deletedProduct: Product = await prismaClient.product.delete({
        where: { id: productId },
      });
      return deletedProduct;
    } catch (error) {
      return handlePrismaError(
        error,
        `Ha ocurrido un error al intentar eliminar el producto con el id: ${productId}`,
        {
          notFoundMessage: `No existe un producto con el id: ${productId}`,
        }
      );
    }
  }
}
export default ProductService;
