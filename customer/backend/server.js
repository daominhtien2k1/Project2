import express from 'express';
import bodyParser from "body-parser";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./data/DataImport.js";
import productRoutes from "./routes/ProductRoutes.js";
import {errorHandler, notFound} from "./middleware/Errors.js";
import userRoutes from "./routes/UserRoutes.js";
import orderRoutes from "./routes/OrderRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders",orderRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("backend ready");
});