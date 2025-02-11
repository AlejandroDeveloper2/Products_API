import express from "express";
import cors from "cors";

import { ProductsRouter } from "@routes/products.route";
import errorHandle from "@middleware/errorHandler";

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

export default app;
