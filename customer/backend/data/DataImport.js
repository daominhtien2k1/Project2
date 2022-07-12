import express from "express";
import User from "../models/UserModel.js";
import users from "./UserData.js";
import Product from "../models/ProductModel.js";
import products from "./ProductData.js";
import asyncHandler from "express-async-handler"

const ImportData = express.Router();

ImportData.post('/users', asyncHandler(async (req, res) => {
    await User.remove({});
    const importUsers = await User.insertMany(users);
    res.send({importUsers});
}));

ImportData.post('/products',  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({importProducts});
}));

export default ImportData;