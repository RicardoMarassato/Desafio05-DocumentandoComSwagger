import { app } from ".";
import express, { json, Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../src/swagger.json";

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(Router());

app.listen(3333, () => console.log("Server is running!"));


