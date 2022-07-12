import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import protect from "../middleware/AuthMiddleware.js";

const userRoutes = express.Router();

//login
userRoutes.post("/login", asyncHandler(async (req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    // console.log(req.body);
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
}))

//register
userRoutes.post("/register", asyncHandler(async (req,res) => {
    const {accountName, password, name, dateOfBirth, email, telephone, gender,
        occupation, nationality, city, district, neighborhood, street, lane} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await User.create({accountName, password, name, dateOfBirth, email, telephone, gender,
        occupation, nationality, city, district, neighborhood, street, lane})
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
}))

//profile
userRoutes.get("/profile", protect, asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    if(user){
        res.status(201).json(user);
    }else{
        res.status(400);
        throw new Error("User not found");
    }
}))

//updateProfile
userRoutes.put("/profile", protect, asyncHandler(async (req,res) => {
    const {accountName, password, name, dateOfBirth, email, telephone, gender,
        occupation, nationality, city, district, neighborhood, street, lane} = req.body;
    const user = await User.findById(req.user._id);
    if(user){
       // Khi set lại bỏ qua email, telephone đã có ai dùng hay chưa
        user.accountName = accountName || user.accountName;
        user.password = password || user.password;
        user.name = name || user.name;
        user.dateOfBirth = dateOfBirth || user.dateOfBirth;
        user.email = email || user.email;
        user.telephone = telephone || user.telephone;
        user.gender = gender || user.gender;
        user.occupation = occupation || user.occupation;
        user.nationality = nationality || user.nationality;
        user.city = city || user.city;
        user.district = district || user.district;
        user.neighborhood = neighborhood || user.neighborhood;
        user.street = street || user.street;
        user.lane = lane || user.lane;
        const updateUser = await user.save();
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            token: generateToken(updateUser._id)
        })
    }else{
        res.status(401);
        throw new Error("User not found");
    }
}))

//list shipping address
userRoutes.get("/shippingAddresses", protect, asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    if(user){
        res.status(201).json(user.shippingAddress);
    }else{
        res.status(400);
        throw new Error("User not found");
    }
}))

// create shipping address
userRoutes.post("/shippingAddress", protect, asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    const {city,district,neighborhood,street,lane,telephone} = req.body;
    if(user){
        const shippingAddress = {
            city: city,
            district: district,
            neighborhood: neighborhood,
            street: street,
            lane: lane,
            telephone: telephone
        };
        user.shippingAddress.push(shippingAddress);
        await user.save();
        res.status(201).json({message: "Shipping address added successfully"});
    }else{
        res.status(400);
        throw new Error("User not found");
    }
}))

// delete shipping address
userRoutes.delete("/shippingAddress/:id", protect, asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    const shippingAddressId = req.params.id;
    if(user){
        user.shippingAddress.id(shippingAddressId).remove();
        await user.save();
        res.status(201).json({message: "Shipping address added successfully"});
    }else{
        res.status(400);
        throw new Error("User not found");
    }
}))

// update shipping address
userRoutes.put("/shippingAddress/:id", protect, asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);
    const shippingAddressId = req.params.id;
    const {city,district,neighborhood,street,lane,telephone,isDefault} = req.body;
    if(user){
        const address = user.shippingAddress.id(shippingAddressId);
        address.city = city || address.city;
        address.district = district || address.district;
        address.neighborhood = neighborhood || address.neighborhood;
        address.street = street || address.street;
        address.lane = lane || address.lane;
        address.telephone = telephone|| address.telephone;
        address.isDefault = isDefault === null ? address.isDefault: isDefault;
        await user.save();
        res.status(201).json({message: "Shipping address update successfully"});
    }else{
        res.status(400);
        throw new Error("User not found");
    }
}))

export default userRoutes;