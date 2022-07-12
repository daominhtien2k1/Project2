import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/ProductModel.js";
import protect from "../middleware/AuthMiddleware.js";

const productRoutes = express.Router();

productRoutes.get("/", asyncHandler(async (req,res) => {
    const products = await Product.find({});
    res.json(products);
}))

productRoutes.get("/product/:id", asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    if(product) {
        res.json(product);
    }else {
        //else không chạy
        console.log("Hi");
        res.status(404);
        throw new Error("Product not found");
    }
}))

productRoutes.post("/product/:id/review", protect, asyncHandler(async (req,res) => {
    const {star,comment} = req.body;
    const product = await Product.findById(req.params.id);
    if(product){
        const alreadyReviewed = product.reviews.find(review => review.user.toString() === req.user._id.toString());
        if(alreadyReviewed){
            res.status(400);
            throw new Error("Product already reviewed");
        }
        const review = {
            author: req.user.name,
            star: Number(star),
            comment: comment,
            user: req.user._id
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.star = product.reviews.reduce((accumulator,item) => accumulator + item.star, 0) / product.reviews.length;
        await product.save();
        res.status(201).json({message: "Reviewed added"});
    }else{
        res.status(404);
        throw new Error("Product not found");
    }
} ))

export default productRoutes;