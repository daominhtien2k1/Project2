import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    author: {
        type: String,
        require: true,
        default: ''
    },
    star: {
        type: Number,
        require: true,
        default: 0
    },
    comment: {
        type: String,
        require: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    }
},{
    timestamps: true
})

const productSchema = mongoose.Schema({
    slug: {
        type: String,
        require: true,
        unique: true
    },
    category: {
        type: String,
        require: true,
        default: ''
    },
    brand: {
        type: String,
        require: true,
        default: ''
    },
    name: {
        type: String,
        require: true,
        default: ''
    },
    description: {
        type: String,
        require: true,
        default: ''
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0
    },
    star: {
        type: Number,
        require: true,
        default: 0
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0
    },
    discount: {
        type: Number,
        require: true,
        default: 0,
    },
    reviews: [reviewSchema],
    price: {
        type: Number,
        require: true,
        default: 0
    },
    defaultImg: {
        type: String,
        require: true
    },
    hoverImg: {
        type: String,
        require: true
    },
},{
    timestamps: true
})
const Product = mongoose.model("Product", productSchema);
export default Product;