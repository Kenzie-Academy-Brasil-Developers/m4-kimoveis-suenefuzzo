import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./error";
import usersRoutes from "./routes/users.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes)

app.use(handleErros)

export default app;