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
}
export default ProductService;
