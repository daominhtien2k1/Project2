import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: "Product",
            },
            qty: {type: Number, require: true}
        }
    ],
    shippingAddress: {
        city: {type: String, require: true},
        district: {type: String, require: true},
        neighborhood: {type: String, require: true},
        street: {type: String, require: true},
        lane: {type: Number, require: true},
        telephone : {type: String, require: true},
    },
    status: {
        type: String,
        require: true,
        enum: ['Pending','Processing','Cancel','Delivered'],
        default: 'Pending'
    },
    total: {
        type: Number,
        require: true
    }
},{
    timestamps: true
})
const Order = mongoose.model("Order", orderSchema);
export default Order;