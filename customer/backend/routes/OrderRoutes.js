import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../middleware/AuthMiddleware.js";
import User from "../models/UserModel.js";
import Order from "../models/OrderModel.js";
import Product from "../models/ProductModel.js";

const orderRoutes = express.Router();

//create order
orderRoutes.post("/", protect, asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    if(user) {
        const {orderItems, shippingAddress, total} = req.body;
        const userId = user._id;
        if(orderItems.length === 0){
            res.status(400);
            throw new Error("No order items");
        }
        const order = await Order.create({userId, orderItems,shippingAddress,total});
        res.status(201).json(order);
    }else{
        res.status(400);
        throw new Error("User not found");
    }
} ))

// detail order
orderRoutes.get("/order/:id", protect, asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    if(user) {
        const order = await Order.findById(req.params.id);
        if (order) {
            let productItemArray=[];
            for(var productItem of order.orderItems){
                const product = await Product.findById(productItem.product);
                productItemArray.push({
                    productImage: product.defaultImg,
                    productName: product.name,
                    productPrice: product.price,
                    productQuantity: productItem.qty
                });
            }
            res.json(
                {
                    products:productItemArray,
                    total: order.total,
                    status: order.status,
                    createdAt: order.createdAt,
                    updatedAt: order.updatedAt
                });
        } else {
            res.status(404);
            throw new Error("Order not found");
        }
    }else{
        res.status(400);
        throw new Error("User not found");
    }
}))

// list order
orderRoutes.get("/", protect, asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    if(user) {
        const orders = await Order.find({});
        res.json(orders);
    }else{
        res.status(400);
        throw new Error("User not found");
    }
}))
export default orderRoutes;