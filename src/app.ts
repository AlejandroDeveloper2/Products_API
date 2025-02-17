import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { ProductsRouter } from "@routes/products.route";
import errorHandle from "@middleware/errorHandler";

import swaggerProductsApi from "./swagger/swaggerProductsApi.json";

const app = express();

/** Hacemos uso de los cors para permitir que nuestra API sea consumida por cualquier dominio */
app.use(
  cors({
    origin: "*",
  })
);

/** Le decimos a express que vamos a manejar los datos en formato json */
app.use(express.json());

/** Usamos de nuestras rutas */
app.use(ProductsRouter);

/** Usamos el middleware de errores */
app.use(errorHandle);

/** Declarar un endpoint global para a nuestra documentación en swagger */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerProductsApi));

export default app;
