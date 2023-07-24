import express, { Router } from "express";
import bodyParser from "body-parser";
import livereload from "connect-livereload";
import { DataBase } from "./src/model/database-connect";
import authApiRouter from "./src/routers/auth.api.router";
import adminApiRouter from "./src/routers/admin.api.router";
import cors from "cors"
const PORT = 8080;
const app = express();

DataBase.connectDB()
    .then(() => console.log('DB Connected!'))
    .catch((err) => console.log(err.message));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())
app.use("/api",authApiRouter)
app.use("/api",adminApiRouter)
app.listen(PORT, 'localhost', () => console.log(`App is running at http://localhost:${PORT}`));